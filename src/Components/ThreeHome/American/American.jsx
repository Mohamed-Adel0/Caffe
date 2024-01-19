import React from 'react';
import Css from "./American.module.css"
import Picture from "../Cappuccino/g5.jpg"
const American = () => {
    return (
        <div className={Css.parent}>
            <div className={Css.card} data-aos="fade-right">
                <h1>Americano</h1>
                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                <p>Sale For <span>$107</span></p>
            </div>
            <div className={Css.card} data-aos="fade-left">
                <img src={Picture} alt="" />
            </div>
        </div>
    );
}

export default American;
