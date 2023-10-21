import React from "react";
import "./style.scss";
import { ListData } from "../../ProductData";

const Products = (props) => {
  return (
    <div className="product-item">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div className="product-text">
        <h3>{props.text}</h3>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default Products;
