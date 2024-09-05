import React, { useEffect, useState } from "react";
import CustomPage from "../components/customPage";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
function Admin() {
  const [food, setFood] = useState([]);
  let getFood = async () => {
    let result = await fetch("http://localhost:4000/api/food/list");
    let data = await result.json();
    if (data.success) {
      setFood(data.data);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <CustomPage>
      <div className="container mt-4">
        <div className=" mb-4 d-flex gap-5">
          <input type="text" className="form-control" />
          <button className="btn main-btn-bg">Add New Food</button>
        </div>

        <table className="table table-striped">
          <thead>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
          </thead>
          <tbody>
            {food.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  <img
                    className="food-img-"
                    src={`http://localhost:4000/images/${item.image}`}
                  />
                </td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CustomPage>
  );
}

export default Admin;
