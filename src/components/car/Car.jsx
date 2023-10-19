import "./Car.css";
import React from "react";

const WhatsAppButton = ({ productName }) => {
  const openWhatsApp = () => {
    const phoneNumber = "+2348135085009";
    const message = `Hello Mr. Sinachi! I am interested in ${productName}.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button className="btn" onClick={openWhatsApp}>
      Order now
    </button>
  );
};

const Car = (props) => {
  return (
    <div className="car-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="name">{props.name}</h2>
      <div className="car-details">
        <p className="price">{props.price}</p>
        <WhatsAppButton productName={props.name} />
      </div>
    </div>
  );
};

export default Car;
