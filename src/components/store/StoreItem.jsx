import React, { useState, useEffect } from 'react';
import phoneImg from '../../images/iphone.png';

const StoreItem = (props) => {
  const { itemInfo, updateCart } = props;
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    setQuantity(event.target.value);
  };

  const { cost, name } = itemInfo;

  const addToCart = () => {
    updateCart({
      itemId: (itemInfo.id), quantity, cost, name,
    });
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity - 1);

  useEffect(() => (quantity < 0 ? setQuantity(0) : null), [quantity]);

  return (
    <div className="item">
      <div className="item__title">{name}</div>
      <img className="item__image" src={phoneImg} alt="Phone" />
      <div className="item__cost">${cost}</div>
      <div className="item__quantwrapper">
        <button type="button" className="item__quantbtn" onClick={decrementQuantity}>-</button>
        <input type="number" name="quantity" className="item__quantinput" onChange={handleInputChange} value={quantity} />
        <button type="button" className="item__quantbtn" onClick={incrementQuantity}>+</button>
      </div>
      <button type="button" className="item__cartbtn" onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default StoreItem;
