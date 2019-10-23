import React from 'react';

const Order = props => {
  return (
    <div className='d-flex justify-content-between'>
      <h2>{props.name}</h2>
      <h4>{props.category}</h4>
      <div>
        <span className='pr-2'>{props.price} ₸</span>
        <button className='btn-primary btn' onClick={props.deleteOrder}>X</button>
      </div>
    </div>
  )
};

export default Order;