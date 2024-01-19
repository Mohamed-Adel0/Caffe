// import React, { useEffect, useState } from "react";
// import Css from "./ReBackapi.module.css";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ReBackapi = () => {
//   const [Setapi , products] = useState()
//     const imgs = {
//         img : "/src/Components/Pictures/menu-bg.jpg",
//         ximg: ""
//     }
//   const x = useParams()
//   const userId = x.id;

//     useEffect(()=>{
//         axios.get(`https://fakestoreapi.com/products/${userId}`).then((resp)=>products(resp.data)).catch((error)=>console.log(error))
//     },[])


//   return (
//     <div className={Css.parent}>
//         {
//             Setapi && (
//                 <div className={Css.container}>
//                      <img src={imgs.img} alt="" />
//                      <img src="" alt="" />
//                      <p>{imgs.img}</p>
//                     <p>{Setapi.title}</p>
//                 </div>

//             )
          
        
//         }
    
//     </div>
//   );
// };

// export default ReBackapi;
