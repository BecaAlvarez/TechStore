import React from 'react';
import './ProductCard.css';
import { MdAddShoppingCart } from 'react-icons/md';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';

export default function ProductCard({data}){ 
  const {title, thumbnail, price} = data;

  return(
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image"/>
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button type="button" className="btn__add-cart">
        <MdAddShoppingCart/>
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

