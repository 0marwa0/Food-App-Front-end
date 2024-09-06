import React, { useState, useEffect } from "react";
import { addCategories } from "../store/categorySlice";
import { fetchCategories } from "../store/categorySlice";
import { useSelector, useDispatch } from "react-redux";
function CategoryUi({ setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const status = useSelector((state) => state.categories.status);
  const createCategory = () => {
    let newCategory = { title: title, image: image.files[0] };
    dispatch(addCategories(newCategory));
    setShowModal(false);
  };
  useEffect(() => {
    // if the state.status is idle it means we fetch the data
    // if status is idle then call fetch categoires
    console.log(status);
    if (status == "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);
  return (
    <div className="d-flex flex-column gap-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Write title here "
        className="form-control"
      />
      <label>Category image</label>
      <input
        onChange={(e) => setImage(e.target)}
        type="file"
        className="form-control"
      />
      <button className="btn btn-primary" onClick={createCategory}>
        Create
      </button>
    </div>
  );
}
export default CategoryUi;
