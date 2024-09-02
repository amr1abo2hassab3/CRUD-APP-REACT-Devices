import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Show = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return (
    <section className="secShow">
      <div className="products-box boxinshow">
        <img src={product.img} alt="iphone 15 pro max" />
        <h1>{product.title}</h1>
        <p>{product.color}</p>
        <p>{product.price}</p>
        <h1>
          <span>{product.category}</span>
        </h1>
      </div>
      <Link to={"/"} className="btn">
      back to home page 
      </Link>
    </section>
  );
};

export default Show;
