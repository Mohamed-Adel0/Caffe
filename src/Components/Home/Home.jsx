import React, { useEffect } from 'react';
import Css from "./Home.module.css"
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <div>
            <div className={Css.parent} >
               <div className={Css.container}>
               <div className={Css.card} data-aos="fade-up">
                    <p>NOW YOU CAN FEEL THE ENERGY</p>
                    <h1>Start your day with</h1>
                    <h1>a black Coffee</h1>
                    <div className={Css.link}>
                    <Link to="">Buy Now</Link> 
                    </div>
                </div>
               </div>
                
            </div>
        </div>
    );
}

export default Home;
