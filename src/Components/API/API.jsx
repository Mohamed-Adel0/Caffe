import React, { useEffect, useState } from 'react';
import "./API.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
const API = () => {
 
    
const [getApi , SetApi] = useState()

useEffect (()=>{
    axios.get(`https://fakestoreapi.com/products`).then((res)=>SetApi(res.data)).catch((Error)=>console.log(Error))
},[])
  
    return (
        <div className="parentx">
         <div className="containerx">
            {
                getApi?.map((item)=>(
                    <div className="cardx" key={item.id}>
                        <img src={item.image} alt="" />
                        <p>{item.title.split(" ").splice(0,4).join(" ")}</p>
                        <p>{item.price}</p>
                        <Link to={`${item.id}`}>Read More</Link>
                    </div>
                ))
            }
         </div>
        </div>
    );
}

export default API;
