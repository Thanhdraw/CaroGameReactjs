import React from "react";
import { ListData } from "../../ProductData";
import Products from "./Products";
import "./style.scss";
const ProductLists = (props) => {
  return (
    <div className="products-list">
      {ListData.map((item, index) => (
        <Products
          key={item.id}
          img={item.img}
          text={item.name}
          price={item.price}
        ></Products>
      ))}
    </div>
  );
};

export default ProductLists;
