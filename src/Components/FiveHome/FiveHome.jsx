import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Css from "./FiveHome.module.css"
import Sora from "../Pictures/b2.jpg"
import ones from "../Pictures/b1.jpg"
import twoa from "../Pictures/g1.jpg"

export default class FiveHome extends Component {
  render() {
    const settings = {
      dots: true,
      Infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
    
    };
    return (
      <div className={Css.parent}>
        <h2>Auto Play</h2>

         <Slider className={Css.cotaniner} {...settings}>
         <div className={Css.card}>
            <img src={Sora} alt="" />
          </div>
          <div className={Css.card}>
            <h3>Mohamed-Adel welcome</h3>
          </div>
          <div className={Css.card}>
            <img src={ones} alt="" />
          </div>
          <div className={Css.card}>
            <h3>Welcome Mohamed</h3>
          </div>
          <div className={Css.card}>
            <img src={twoa} alt="" />
          </div>
         
         </Slider>
         

      </div>
    );
  }
}