import React from 'react';

const NavBar = (props) => {
  const { activePage } = props;
  if (activePage === 'store') {
    return (
      <header className="nav">
        <a className="nav__link" href="./">Home</a>
        <a className="nav__link nav__link--active" href="./store">Store</a>
      </header>
    );
  }
  return (
    <header className="nav">
      <a className="nav__link nav__link--active " href="./">Home</a>
      <a className="nav__link" href="./store">Store</a>
    </header>
  );
};

export default NavBar;
