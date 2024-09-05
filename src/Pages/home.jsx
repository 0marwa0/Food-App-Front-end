import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useFoodList from "../hooks/foodList";
import { ToastContainer, toast } from "react-toastify";
import CustomPage from "../components/customPage";
import HomeHeader from "../components/HomeHeader";
import HomeFilter from "../components/homeFilter";
import { CiSearch } from "react-icons/ci";
import FoodCard from "../components/FoodCard";
import Login from "../components/login";
function Home() {
  const { data, isLoading } = useFoodList();
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [category, setCategory] = useState("All");
  return (
    <CustomPage>
      <HomeHeader />
      <div class="main-layout">
        <HomeFilter />
        <section>
          <p class="places-text">
            <span class="color-main">{data.length}</span> Places to Order
            {showToast ? "show toast" : "Do not show"}
          </p>
          <div class="search-container">
            <CiSearch size={40} />
            {/* <img src="./images/fi-rr-search.svg" /> */}
            <input type="text" />
          </div>
          <div class="cards-container">
            {/* <!-- food card --> */}
            {data.map((item) => {
              if (category == "All" || category == item.category) {
                return (
                  <FoodCard
                    key={item._id}
                    data={item}
                    isLoading={isLoading}
                    setShow={setShow}
                  />
                );
              }
            })}
          </div>
        </section>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login setShow={setShow} setShowToast={setShowToast} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </CustomPage>
  );
}

export default Home;
