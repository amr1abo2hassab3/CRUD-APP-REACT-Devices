import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ScrollReveal from "scrollreveal";

const Phone = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function display() {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        // Filter products to include only those with category "phone"
        const phoneProducts = data.filter(
          (product) => product.category === "phone"
        );
        setProducts(phoneProducts);
      });
  }

  useEffect(() => {
    // إعداد ScrollReveal بعد تحميل العناصر
    const sr = ScrollReveal({
      duration: 1000,
      origin: "bottom",
      distance: "100px",
      easing: "ease-in-out",
    });

    // تطبيق ScrollReveal على العناصر ذات الكلاس .reveal
    sr.reveal(".reveal");

    // تنظيف ScrollReveal عند إلغاء تثبيت المكون
    return () => sr.destroy();
  }, [products]); // إعادة تشغيل التأثير عند تغيير المنتجات

  useEffect(() => {
    display();
  }, []);

  const DeleteProduct = (pro) => {
    Swal.fire({
      title: "Are you sure you want to delete this product?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/posts/${pro.id}`, {
          method: "DELETE",
        }).then(() => {
          display(); // Refresh products after deletion
        });
      }
    });
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="products">
      <Link to={"/addProducts"} className="btn btnLand">
        add product
      </Link>
      <div>
        <input
          type="search"
          placeholder="Search By name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h2>
        our <span>phone products</span>
      </h2>
      <div className="content-products">
        {filteredProducts.map((i) => (
          <div className="products-box reveal" key={i.id}>
            <img src={i.img} alt={i.title} />
            <h1>{i.title}</h1>
            <p>{i.color}</p>
            <p>{i.price}</p>
            <h1>
              <span>{i.category}</span>
            </h1>
            <div className="btn-Action">
              <div>
                <Link to={`/editproduct/${i.id}`}>
                  <i className="bi bi-pencil-square"></i>
                </Link>
              </div>
              <div>
                <Link to={`/showproduct/${i.id}`}>
                  <i className="bi bi-eye"></i>{" "}
                </Link>
              </div>
              <div onClick={() => DeleteProduct(i)}>
                <Link>
                  <i className="bi bi-trash"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Phone;
