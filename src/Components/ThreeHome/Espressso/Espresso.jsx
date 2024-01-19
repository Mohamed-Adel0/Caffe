import React from 'react';
import Css from "./Espressso.module.css"
const Espresso = () => {
    return (
        <div>
             <div className={Css.container} >
            <div className={Css.card} data-aos="fade-down-right">
                <div className={Css.sallary}>
                    <h1>Cappuccino</h1>
                    <p>$27</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
            <div className={Css.card} data-aos="flip-up">
                <div className={Css.sallary}>
                    <h1>Americano</h1>
                    <p>$101</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
            <div className={Css.card} data-aos="fade-down-left">
                <div className={Css.sallary}>
                    <h1>Espresso</h1>
                    <p>$49</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
            <div className={Css.card} data-aos="fade-right">
                <div className={Css.sallary}>
                    <h1>Macchiato</h1>
                    <p>$20</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
            <div className={Css.card}data-aos="flip-up">
                <div className={Css.sallary}>
                    <h1>Mocha</h1>
                    <p>$80</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
            <div className={Css.card} data-aos="fade-right">
                <div className={Css.sallary}>
                    <h1>Coffee Latte</h1>
                    <p>$33</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
            <div className={Css.card} data-aos="fade-right">
                <div className={Css.sallary}>
                    <h1>Piccolo Latte</h1>
                    <p>$60</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
            <div className={Css.card}data-aos="flip-up">
                <div className={Css.sallary}>
                    <h1>Ristretto</h1>
                    <p>$89</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
            <div className={Css.card} data-aos="fade-right">
                <div className={Css.sallary}>
                    <h1>Affogato</h1>
                    <p>$55</p>
                </div>
                <h5>Usage of the Internet is becoming more common due to rapid advance.</h5>
            </div>
           
        </div>
        </div>
    );
}

export default Espresso;
