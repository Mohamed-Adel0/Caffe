import React from "react";
import Css from "./TwoHome.module.css";
import coffe from "../Pictures/video-bg.jpg";
import signature from "../Pictures/signature.png";

const TwoHome = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          
            <div className={Css.card}  data-aos="fade-right">
              <img src={coffe} alt="" />
              <div className={Css.bg}></div>
            </div>
            <div className={Css.card} data-aos="fade-left">
              <p className={Css.p}>LIVE COFFEE MAKING PROCESS.</p>
              <h1>We Telecast our</h1>
              <h1>Coffee Making Live</h1>
              <h4>We are here to listen from you deliver exellence</h4>
              <p>
                <span >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod temp or incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim.
                </span>
              </p>
                <img src={signature} alt="" />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default TwoHome;
