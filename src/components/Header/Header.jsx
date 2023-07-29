import React from 'react';
import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header() {
  
  return (
    <header className="header">
      <img src="../../assets/logoApple.png" className="logo"/>
      <nav className="contanierHeader">
        <CartButton/>
      </nav>
    </header>
  );
}

export default Header;
