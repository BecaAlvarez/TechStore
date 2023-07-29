import React, { useContext } from 'react';
import './ProductCard.css';
import { MdAddShoppingCart } from 'react-icons/md';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

export default function ProductCard({data}){ 
  const {title, thumbnail, price} = data;

  const { cartItems,setCartItems } = useContext(AppContext);

  //Para enviar o item ao carrinho e atualiza-lo
  //[ ...cartItems, data] => [Pega todos os itens atuais, add o novos items]
  const handleAddCart = () => setCartItems([ ...cartItems, data]);

  return(
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image"/>
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button type="button" className="btn__add-cart" onClick={ handleAddCart }>
        <MdAddShoppingCart/>
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired; 

