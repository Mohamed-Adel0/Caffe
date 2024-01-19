import React from 'react';
import Css from "./Cappuccino.module.css"
import Picture from "./g4.jpg"
const Cappuccino = () => {
 
    return (
        <div className={Css.parent}>
            <div className={Css.card} data-aos="fade-right">
                <h1>Cappuccino</h1>
                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                <p>Sale For <span>$27</span></p>
            </div>
            <div className={Css.card} data-aos="fade-left">
                <img src={Picture} alt="" />
            </div>
        </div>
    );
}

export default Cappuccino;
