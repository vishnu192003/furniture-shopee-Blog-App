import React from 'react';
import theme from '../data/theme.json';
import sofa from '../images/3.jpg';
import table from '../images/vishnu (2).jpeg';
import chair from '../images/vishnu (1).jpeg';
import bed from '../images/vishnu (1).png';

const images = {
  "vishnu1": sofa,
  "vishnu2": table,
  "vishnu3": chair,
  "vishnu4": bed,
 
};

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={{ backgroundColor: theme.backgroundColor }}>
      <img src={images[product.image]} alt={product.name} />
      <h2 style={{ color: theme.headingColor }}>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
