import React from 'react';

const OrderForm = props => {
  return (
    <form className='mb-5' onSubmit={props.addOrder}>
      <input placeholder='введите название' onChange={props.nameChangeHandler} value={props.name} name='name' type="text"/>
      <input placeholder='введите цену' onChange={props.priceChangeHandler} value={props.price} name='price' type="number"/>
      <select onChange={props.categoryChangeHandler} value={props.category} name="category" id="category">
        {props.categories.map(category => {
          return <option key={category.value} value={category.value}>{category.name}</option>
        })}
      </select>
      <button>Add Product</button>
    </form>
  )
};

export default OrderForm;