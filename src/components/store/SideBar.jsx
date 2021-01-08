import React from 'react';

const SideBar = (props) => {
  const { changeSection, section } = props;

  const handleBtnClick = (event) => {
    changeSection(event.target.dataset.section);
  };
  return (
    <div className="sidebar">
      {section === 'cart'
        ? <button type="button" onClick={handleBtnClick} className="sidebar__btn sidebar__btn--active" data-section="cart">Cart</button>
        : <button type="button" onClick={handleBtnClick} className="sidebar__btn" data-section="cart">Cart</button>}
      {section === 'phones'
        ? <button type="button" onClick={handleBtnClick} className="sidebar__btn sidebar__btn--active" data-section="phones">Phones</button>
        : <button type="button" onClick={handleBtnClick} className="sidebar__btn" data-section="phones">Phones</button>}
      {section === 'tablets'
        ? <button type="button" onClick={handleBtnClick} className="sidebar__btn sidebar__btn--active" data-section="tablets">Tablets</button>
        : <button type="button" onClick={handleBtnClick} className="sidebar__btn" data-section="tablets">Tablets</button>}
    </div>
  );
};
export default SideBar;
