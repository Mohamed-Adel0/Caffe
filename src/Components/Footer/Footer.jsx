import React from "react";
import Css from "./Footer.module.css";
const Footer = () => {
    const x = {
        tex : "=>"
    }
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}  data-aos="fade-right">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
            <h4>Copyright ©2023 All rights reserved | This template is made with by <span>Mohamed-Adel</span></h4>
          </div>
          <div className={Css.card} data-aos="flip-left">
            <h2>Newsletter</h2>
            <p>Stay update with our latest</p>
            <div className={Css.form}>
            <input type="email" placeholder="Enter Email"/>
            <button>{x.tex}</button>
            </div>
            
          </div>
          <div className={Css.card} data-aos="fade-left">
            <h2>Follow Us</h2>
            <p>Let us be social</p>
            <div className={Css.sociaal}>
                <h2>face</h2>
                <h2>instgram</h2>
                <h2>Github</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
