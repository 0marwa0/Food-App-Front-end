import React from "react";
import Rest_Log from "../assets/Images/logo-holder.png";
import Star_Iicon from "../assets/Images/star.svg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IsLogin } from "../SharedFunctions";
function FoodCard({ data, setShow, isLoading }) {
  let addFood = async (id) => {
    try {
      let token = localStorage.getItem("token");
      console.log(token, "tooooken");
      let myHeader = new Headers();
      myHeader.append("token", token);
      myHeader.append("Content-Type", "application/json");

      await fetch("http://localhost:4000/api/cart/add", {
        method: "POST",
        headers: myHeader,
        body: JSON.stringify({ itemId: id }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res, "food added");
        });
    } catch (error) {}
  };
  return (
    // <div class="card">
    <div class="food-card">
      <div class="img-container">
        <img
          className="food-img"
          src={`http://localhost:4000/images/${data.image}`}
          alt="sushi card"
        />
      </div>

      <div class="text-container">
        <div class="restaurant-logo">
          <img src={Rest_Log} />
        </div>

        <div class="card-info">
          <div>
            <p class="card-info-head">{data.name}</p>
            <div class="review-text card-info-text">
              <img src={Star_Iicon} alt="star icon" />
              <span class="rating-text">4.8</span>
              {/* <img src="./images/dot.svg" alt="dot icon" /> */}
              <p>1024 + reviews</p>
            </div>
            <p>Sushi, Sea food</p>
          </div>
          <div>
            <div
              className="btn"
              onClick={() => {
                IsLogin() ? addFood(data._id) : setShow(true);
              }}
            >
              <IoIosAddCircleOutline size={40} color="624DE3" />
            </div>
            <div class="delivery-text green-bg">Free Delivery</div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default FoodCard;
