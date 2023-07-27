import React from 'react';
import { BsFillCartDashFill } from 'react-icons/bs';

function CartItem(){
  return(
    <section className="cart-item">
      <img src="" alt="imagem do produto" className="cart-item-imagem"/>
      <div className="cart-item-content">
        <h3 className="cart-item-title">Titulo do produto</h3>
        <h3 className="cart-item-price">Preço do produto</h3>
        <button type="button" className="btn__remove__item">
          <BsFillCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;
