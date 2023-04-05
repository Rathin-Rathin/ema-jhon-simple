import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';
const ReviewItem = ({ product,handelRemoveFromCart }) => {
    const {id,name,price,img,shipping,quantity
    } = product;
    return (
        <div className='review-item'>
            
            <div  className='item-info'>
            <img src={img} alt="" />
                <div>
                    <h5>{name}</h5>
                    <h6>Price:<span>${price}</span></h6>
                    <p>Order quantity:<span>{quantity}</span> </p>
                </div>
            </div>
            <div className='delete-btn-con'> 
                <button onClick={()=>handelRemoveFromCart(id)} className='delete-btn'><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;