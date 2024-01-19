import React from 'react';
import Css from "./FourHome.module.css"
import coffe1 from "../Pictures/g4.jpg"
import coffe2 from "../Pictures/g5.jpg"
import g3 from "../Pictures/g3.jpg"
import b1 from "../Pictures/b1.jpg"
import b2 from "../Pictures/g2.jpg"
const FourHome = () => {
    return (
        <div>
            <div className={Css.parent}>
                <div className={Css.text}>
                    <h1>Drink Coffe With your Family</h1>
                    <h4>i hope you be happy with our</h4>
                </div>
                <div className={Css.container } >
                    <div className={Css.cards}  data-aos="fade-right">
                        <img src={coffe1} alt="" />
                        <img src={coffe2} alt="" />
                    </div>
                    <div className={Css.cards}  data-aos="fade-left">
                        <div className={Css.card}>
                            <img src={g3} alt="" />
                        </div>
                        <div className={Css.card}>
                            <img src={b1} alt="" />
                            <img src={b2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourHome;
