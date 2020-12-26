import React, { useState } from "react";
import { data } from "./data";

const Menu = () => {
  const [all, setAll] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [shakes, setShakes] = useState(false);

  return (
    <>
      <h2>Our Menu</h2>
      <div className="container">
        <div className="containerNav">
          <button
            onClick={() => {
              setAll(true);
              setBreakfast(false);
              setLunch(false);
              setShakes(false);
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setAll(false);
              setBreakfast(true);
              setLunch(false);
              setShakes(false);
            }}
          >
            Breakfast
          </button>
          <button
            onClick={() => {
              setAll(false);
              setBreakfast(false);
              setLunch(true);
              setShakes(false);
            }}
          >
            Lunch
          </button>
          <button
            onClick={() => {
              setAll(false);
              setBreakfast(false);
              setLunch(false);
              setShakes(true);
            }}
          >
            Shakes
          </button>
        </div>
        {all && (
          <div className="menu">
            {data.map((food) => {
              const { id, img, name, price, description } = food;
              return (
                <div className="food" key={id}>
                  <img src={img} alt="" />
                  <div className="NPD">
                    <div className="NP">
                      <h4>{name}</h4>
                      <p>{price}</p>
                    </div>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {lunch && (
          <div className="menu">
            {data.map((food) => {
              if (food.catagory == "lunch") {
                const { id, img, name, price, description } = food;
                return (
                  <div className="food" key={id}>
                    <img src={img} alt="" />
                    <div className="NPD">
                      <div className="NP">
                        <h4>{name}</h4>
                        <p>{price}</p>
                      </div>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
        {shakes && (
          <div className="menu">
            {data.map((food) => {
              if (food.catagory == "shake") {
                const { id, img, name, price, description } = food;
                return (
                  <div className="food" key={id}>
                    <img src={img} alt="" />
                    <div className="NPD">
                      <div className="NP">
                        <h4>{name}</h4>
                        <p>{price}</p>
                      </div>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
        {breakfast && (
          <div className="menu">
            {data.map((food) => {
              if (food.catagory == "breakfast") {
                const { id, img, name, price, description } = food;
                return (
                  <div className="food" key={id}>
                    <img src={img} alt="" />
                    <div className="NPD">
                      <div className="NP">
                        <h4>{name}</h4>
                        <p>{price}</p>
                      </div>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
