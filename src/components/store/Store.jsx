import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import SideBar from './SideBar';
import StoreContent from './StoreContent';
import Cart from './Cart';

const Store = () => {
  const [cart, setCart] = useState([]);
  const [activeSection, setActiveSection] = useState('phones');

  const changeActiveSection = (newSection) => {
    (setActiveSection(newSection));
  };

  const findItemIndex = (itemId) => (cart.findIndex((cartItem) => (cartItem.itemId === itemId)));

  const addItemToCart = (itemInfo) => setCart(cart.concat(itemInfo));

  const updateItemQuant = (itemInfo) => {
    const { itemId } = itemInfo;
    const itemIndex = findItemIndex(itemId);
    setCart((prevCart) => {
      const newCart = prevCart.map((cartItem, index) => {
        if (index === itemIndex) {
          return itemInfo;
        }
        return cartItem;
      });
      return newCart;
    });
  };

  const itemInCart = (testId) => {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].itemId === testId) {
        return true;
      }
    }
    return false;
  };

  const updateCart = (itemInfo) => {
    const { itemId } = itemInfo;
    if (itemInCart(itemId)) {
      updateItemQuant(itemInfo);
      return;
    }
    addItemToCart(itemInfo);
  };

  useEffect(() => {
    // because I am a baller?
  }, [cart]);

  return (
    <div className="page">
      <NavBar activePage="store" />
      <div className="store">
        <SideBar section={activeSection} changeSection={changeActiveSection} />
        {activeSection === 'cart'
          ? <Cart cart={cart} />
          : <StoreContent section={activeSection} updateCart={updateCart} />}
      </div>
      <Footer />
    </div>
  );
};

export default Store;
