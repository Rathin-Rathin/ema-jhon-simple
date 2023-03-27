import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const { name, img, seller, price, ratings, quantity, id,  } = props.product;
    const handelAddToCart = props.handelAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="Loading" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h2>Price :${price}</h2>
                <p>Manufacturer : {seller}</p>
                <p>Rating :{ratings} stars</p>
            </div>
            <button onClick={() => handelAddToCart(props.product)} className='add-btn'>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;