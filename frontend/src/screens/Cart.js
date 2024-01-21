import React from "react";
import Delete from "@material-ui/icons/Delete";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  // Retrieve cart data and dispatch function from context
  let data = useCart();
  let dispatch = useDispatchCart();

  // Check if the cart is empty
  if (data.length === 0) {
    return <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>;
  }

  // Handle checkout functionality
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/auth/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    // Log the response status
    console.log("JSON RESPONSE:::::", response.status);

    // If the response status is 200, clear the cart
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  // Calculate total price of items in the cart
  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        {/* Cart Table */}
        <table className="table table-hover">
          <thead className="text-info fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* Map through cart items and display in table rows */}
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  {/* Delete button with a click handler to remove the item from the cart */}
                  <button type="button" className="btn p-0">
                    <Delete
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Price */}
        <div>
          <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
        </div>

        {/* Checkout Button */}
        <div>
          <button className="btn bg-info mt-5" onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
