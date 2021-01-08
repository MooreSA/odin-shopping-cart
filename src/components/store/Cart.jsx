import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const { cart } = props;

  return (
    <div className="cart">
      { cart.length === 0
        ? <div>No items in cart</div>
        : cart.map((cartItem) => <CartItem item={cartItem} key={cartItem.itemId} />)}
    </div>
  );
};

export default Cart;
