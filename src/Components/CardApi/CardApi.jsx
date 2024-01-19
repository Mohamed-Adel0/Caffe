import React, { useEffect, useState } from "react";
import Css from "./CardApi.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const CardApi = () => {

  const number = useParams();
  const useId = number.id;

  const [setData, getData] = useState();


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${useId}`)
      .then((resp) => getData(resp.data))
      .catch((error) => console.log("error"));
  });
  return (
    <div className={Css.parent}>
      {setData && (
        <div className={Css.container}>
          <div className={Css.card}>
            <p>{setData.title}</p>
            <p>{setData.description}</p>
            <p>{setData.price}</p>
          </div>
          <div className={Css.card}>
            <img src={setData.image} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardApi;
