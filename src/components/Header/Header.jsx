import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="contanierHeader">
        <button type="button" >Carrinho</button>
        <AiOutlineShoppingCart/>
      </nav>
    </header>
  );
}

export default Header;
