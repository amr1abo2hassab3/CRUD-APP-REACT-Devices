import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [imgInput, setImg] = useState(null);
  const [preview, setPreview] = useState(""); // تخزين رابط المعاينة
  const [titleInput, setTitle] = useState("");
  const [colorInput, setColor] = useState("");
  const [priceInput, setPrice] = useState("");
  const [categoryInput, setCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setTitle(data.title);
        setColor(data.color);
        setPrice(data.price);
        setCategory(data.category);
        setImg(data.img);
        setPreview(data.img);
      });
  }, [productId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file); // تخزين ملف الصورة

    // إنشاء رابط معاينة للصورة
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result); // تحديث رابط المعاينة
    };
    if (file) {
      reader.readAsDataURL(file); // قراءة الصورة وتحويلها إلى Base64
    }
  };

  function EditProduct(e) {
    e.preventDefault();

    // التحقق من صحة المدخلات
    if (!imgInput) {
      Swal.fire({
        title: "Please select an image.",
        text: "Select an image for the product.",
        icon: "error",
      });
      return;
    }
    if (!titleInput) {
      Swal.fire({
        title: "Please Enter title product.",
        text: "Enter the title of the product.",
        icon: "error",
      });
      return;
    }
    if (!colorInput) {
      Swal.fire({
        title: "Please Enter Color product.",
        text: "Enter the color of the product.",
        icon: "error",
      });
      return;
    }
    if (!priceInput) {
      Swal.fire({
        title: "Please Enter Price product.",
        text: "Enter the price of the product.",
        icon: "error",
      });
      return;
    }
    if (!categoryInput) {
      Swal.fire({
        title: "Please Enter Category product.",
        text: "Enter the category of the product.",
        icon: "error",
      });
      return;
    }
    fetch(`http://localhost:3000/posts/${productId}`, {
      method: "PUT",
      body: JSON.stringify({
        img: preview,
        title: titleInput.toLowerCase(),
        color: colorInput,
        price: priceInput,
        category: categoryInput,
      }),
    });
    Swal.fire({
      title: "You Edit this product",
      icon: "success",
    }).then(() => navigate("/"));

    Swal.fire({
      title: "Successful modifcation process",
      icon: "success",
    });
  }

  return (
    <section className="addProducts">
      <h1>
        <span>Add Product</span>
      </h1>
      <form onSubmit={EditProduct}>
        <label>
          Product <span>Image:</span>
        </label>
        <div className="imgInput">
          <input type="file" onChange={handleImageChange} />
          <img src={preview} alt="Product Preview" />
        </div>
        <div>
          <label>
            Product <span>Title:</span>
          </label>
          <input
            type="text"
            placeholder="Enter Name Product"
            value={titleInput}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>
            Product <span>Color:</span>
          </label>
          <input
            type="text"
            placeholder="Enter Color Product"
            value={colorInput}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <label>
            Product <span>Price:</span>
          </label>
          <input
            type="text"
            placeholder="Enter Price Product"
            value={priceInput}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>
            Product <span>Category:</span>
          </label>
          <input
            type="text"
            placeholder="Enter Category Product"
            value={categoryInput}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Edit Product
        </button>
      </form>
    </section>
  );
};

export default Edit;
