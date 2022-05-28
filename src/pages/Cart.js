import React from "react";
import { selectCartItems } from "../features/shop/shopSlice";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  console.log("cartItems", cartItems);

  return (
    <div>
      <h1>My Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item No.</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item) => {
            return (
              <tr>
                <td>1</td>
                <td>{item.item.name}</td>
                <td>{item.cartQuantity}</td>
                <td>{item.item.price}</td>
                <td>0</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr> */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total: </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
