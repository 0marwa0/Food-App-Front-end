import React, { useEffect, useState } from "react";
import CustomPage from "../components/customPage";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categorySlice";
import { Modal } from "react-bootstrap";
import CategoryUi from "./categroyUi";
import "./main.scss";
function Categories() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const status = useSelector((state) => state.categories.status);
  const data = useSelector((state) => state.categories.data);

  console.log(data);
  useEffect(() => {
    // if the state.status is idle it means we fetch the data
    // if status is idle then call fetch categoires
    console.log(status);
    if (status == "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  return (
    <CustomPage>
      <div className="container mt-4">
        <div className=" mb-4 d-flex gap-5">
          <input type="text" className="form-control" />
          <button
            className="btn main-btn-bg"
            onClick={() => setShowModal(true)}
          >
            Add New Category
          </button>
        </div>

        <table className="table table-striped">
          <thead>
            <th>Title</th>
            <th>Image</th>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>
                  <img src="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <CategoryUi setShowModal={setShowModal} />
        </Modal.Body>
      </Modal>
    </CustomPage>
  );
}

export default Categories;
