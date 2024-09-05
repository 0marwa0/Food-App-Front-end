import React, { useEffect, useState } from "react";
import CustomPage from "../components/customPage";
import "../index.css";
function Orders() {
  const [Orders, setOrders] = useState([]);
  let getOrders = async () => {
    let result = await fetch("http://localhost:4000/api/order/list");
    let data = await result.json();
    if (data.success) {
      setOrders(data.data);
      console.log(data, "result");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <CustomPage>
      <div className="container mt-4">
        <div className=" mb-4 d-flex gap-5">
          <input type="text" className="form-control" />
        </div>

        <table className="table table-striped">
          <thead>
            <th>Items</th>
            <th>Adress</th>
            <th>Status</th>
            <th>Amount</th>
          </thead>
          <tbody>
            {Orders.map((item) => (
              <tr>
                <td>
                  {item.items?.map((food) => (
                    <div>{food.name}</div>
                  ))}
                </td>
                <td>
                  <div>
                    <div>Country:{item.address.country}</div>
                    <div>Street:{item.address.street}</div>
                    <div>Zip Code:{item.address.country}</div>
                  </div>
                </td>
                <td>{item.status}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CustomPage>
  );
}

export default Orders;
