import React from "react";
import { Data } from "../../Data";
import Card from "./Card";
import "./style.css";
const CardList = (props) => {
  return (
    <div className="card-lists">
      {props.children}
      {Data.map((item, index) => (
        <Card
          key={item.id}
          img={item.image}
          avatar={item.avartar || item.image}
          title={item.title}
          name={item.author}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;
