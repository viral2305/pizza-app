import React from "react";
import { Button } from "antd";
import { AndroidOutlined } from "@ant-design/icons";
import Pizza from "../../src/assests/pizza.png";

export default function Title() {
  return (
    <div className="titlewrapper">
        <img className="mainimg" src={Pizza} alt="pizza" />
      
      <div className="text">
        <div className="title">Free Pizza</div>
        <span className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error
          aspernatur
        </span>
        <Button
          className="orderbtn"
          type="primary"
          icon={<AndroidOutlined />}
          shape="round"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}
