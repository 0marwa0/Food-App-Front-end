import React from "react";
import { foodCatgoery } from "../assets";
import HeaderImg from "../assets/Images/Header2.png";
import "../index.css";
function HomeHeader({ setCategory }) {
  return (
    <header>
      <img src={HeaderImg} />
      <div class="dishs-container">
        {/* dish-item */}
        {foodCatgoery.map((food) => (
          <div
            onClick={() => setCategory(food.food_name)}
            class={`food-dish ${food.class_name}`}
          >
            <img src={food.food_image} />
            <p>{food.food_name}</p>
          </div>
        ))}
      </div>
    </header>
  );
}

export default HomeHeader;
