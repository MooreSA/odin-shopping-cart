/* eslint-disable no-unused-vars */
import React from 'react';

const CartItem = (props) => {
  const { item } = props;

  return (
    <div className="cartitem">
      <div className="cartitem__name">{item.name}</div>
      <div className="cartitem__cost">Cost: ${item.cost}</div>
      <div className="cartitem__quantity">Amount: {item.quantity}</div>
      <div className="cartitem__cost">Total: ${item.cost * item.quantity}</div>
    </div>
  );
};

export default CartItem;
