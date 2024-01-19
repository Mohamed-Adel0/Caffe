import React, { useState, useEffect } from "react";
import "./Test.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Test = () => {
  const [Getdataapi, setAPI] = useState();

  useEffect(() => {
    let x = "Front End Devepoer";
    console.log(x);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setAPI(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="hook">
      <div className="box-container">
        {Getdataapi?.map((getData) => (
          <div key={getData.id}>
            <div className="cardx">
              <img src={getData.image} alt="" />
              <p> {getData.title.split(" ").splice(0, 3).join(" ")} </p>
              <Link to={`${getData.id}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
