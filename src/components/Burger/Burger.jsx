import React from "react";
import "./Burger.css";
import BurgerItem from "./BurgerItem/BurgerItem.jsx";

const Burger = ({ ingridients, ingridientsInfo }) => {
  let totalPrice = 0;
  if(ingridients.length){
    totalPrice = ingridients.reduce((sum,current) => sum +  ingridientsInfo.find(elem => elem.name === current).price,0)
  }


  return (
    <div className="d-flex flex-column border border-info rounded h-75 w-50 mx-1">
      <h1 className="text-center">Burger</h1>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {ingridients.map((elem,index) => (
          <BurgerItem name={elem} key={index}/>
        ))}
        <div className="BreadBottom"></div>
      </div>
        <p className="text-warning m-0 text-center mb-1">Total price : {totalPrice + 20} сом</p>
    </div>
  );
};

export default Burger;
