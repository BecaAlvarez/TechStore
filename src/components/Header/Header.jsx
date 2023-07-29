import React from 'react';
//import Cart from '../Cart/Cart';
import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header() {
  
  return (
    <header className="header">
      <nav className="contanierHeader">
        <CartButton/>
      </nav>
    </header>
  );
}

export default Header;
