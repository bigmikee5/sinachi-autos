import "./Car.css";
import car1 from "../assets/2010-Venza-V6.jpeg";
import Car from "./Car";
import CarData from "../car/CarData";

import React from "react";

const CarItem = () => {
  return (
    <div className="car">
      <p className="intro">
        Welcome to Sinachi Autos. Discover an exclusive collection of
        top-quality cars from renowned manufacturers. With a commitment to
        excellence and customer satisfaction, we strive to provide you with the
        best in class vehicles tailored to your preferences. Explore our diverse
        range of models, each meticulously curated to meet the highest standards
        of performance, luxury, and comfort. Find the perfect ride that matches
        your style and exceeds your expectations at our dealership today!
      </p>
      <div className="car-container">
        {CarData.map((val, index) => {
          return (
            <Car
              key={index}
              imgsrc={val.imgsrc}
              name={val.name}
              price={val.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarItem;
