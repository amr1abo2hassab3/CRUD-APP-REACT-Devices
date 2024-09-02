import React, { useEffect, useRef } from "react";
import "./Landing.css";
import imgLanding from "../../media/1_c26LAwpdlPmK3x1lrlGwNA.png";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

const Landing = () => {
  const el = useRef(null);

  useEffect(() => {
    // إعداد Typed.js
    const typed = new Typed(el.current, {
      strings: ["CRUD APP"],
      typeSpeed: 200,
      backSpeed: 100,
      loop: true,
    });

    // تنظيف تأثير Typed عند إلغاء تثبيت المكون
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // إعداد ScrollReveal
    ScrollReveal().reveal(".reveal1", {
      duration: 1000,
      origin: "left",
      distance: "100px",
      easing: "ease-in-out",
      opacity: 0,
    });
    ScrollReveal().reveal(".reveal2", {
      duration: 1000,
      origin: "right",
      distance: "100px",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="landing">
      <div className="content-landing reveal1">
        <h3>hello,</h3>
        <h1>
          welcome to <span ref={el}>crud APP</span>
        </h1>
      </div>
      <div className="img-landing reveal2">
        <img src={imgLanding} alt="img-Landing" />
      </div>
    </section>
  );
};

export default Landing;
