import React from "react";
import CustomPage from "../components/customPage";
import "../styling/cart.css";
function Cart() {
  return (
    <CustomPage>
      <div className="contents">
        <div className="item-card">
          <section className="orders-section">
            {/* <!-- Breadcrumb and Title Section --> */}
            <div className="breadcrumb-title">
              {/* <!-- Breadcrumb Navigation --> */}
              <div className="breadcrumb"></div>

              {/* <!-- Page Title --> */}
              <div className="page-title dsp-flex"></div>
            </div>

            {/* <!-- Order Details Section --> */}
            <div className="orders-list">
              <p className="order-date">Today</p>

              {/* <!-- Order Item --> */}
              <div className="order-item">
                <div className="item-main">
                  <p className="item-title">Main Item</p>
                  <img
                    src="/2/images/food3.png"
                    alt="Item Image"
                    className="item-image"
                  />
                </div>
                <div className="item-details">
                  <p className="item-name">Nigiri with Megan</p>
                  <p className="item-description">Sushi rice, shrimp, Wasabi</p>
                  <span className="item-price">$6.00</span>
                  <img src="/images/icons8-trash.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="total-price">
              <span className="item-price">15.00$</span>
              <p>Subtotal</p>
            </div>

            <div className="addnote">
              <img src="/images/Add_Plus_icon.svg" alt="" />
              <p>Add Note</p>
            </div>
            <div className="order-text-details">
              <p>Details</p>
              <p>Delivery Free</p>
              <p>0.00$</p>
              <p>Total</p>
              <p>15.00$</p>
            </div>
            <button className="centered">Go To checkout</button>
          </section>
        </div>
      </div>
    </CustomPage>
  );
}

export default Cart;
