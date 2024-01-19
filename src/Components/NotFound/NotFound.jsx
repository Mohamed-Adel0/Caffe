import React from 'react';
import Css from "./NotFound.module.css"
import Picture from "../Pictures/NotFound.jpg"
const NotFound = () => {
    return (
        <div className={Css.parent}>
            <img src={Picture} alt="" />
        </div>
    );
}

export default NotFound;
