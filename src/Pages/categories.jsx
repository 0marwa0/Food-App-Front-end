import React, { useEffect, useState } from "react";
import CustomPage from "../components/customPage";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
function Categories() {
  const state = useSelector((state) => state.categories.status);
  console.log(state, "categories");
  return (
    <CustomPage>
      <div className="container mt-4">
        <div className=" mb-4 d-flex gap-5">
          <input type="text" className="form-control" />
          <button className="btn main-btn-bg">Add New Category</button>
        </div>

        <table className="table table-striped">
          <thead>
            <th>Title</th>
            <th>Image</th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </CustomPage>
  );
}

export default Categories;
