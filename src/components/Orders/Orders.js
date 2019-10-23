import React from 'react';
import Order from "./Order/Order";
import Graph from "../Graph/Graph";

const Orders = props => {
  let categories = [];
  let foodAverage,
    carAverage,
    entertainmentAverage;
  let foodAmount = props.orders.filter(order => order.category === 'food')
    .reduce((amount, item) => parseInt(item.price) + amount, 0);


  let carAmount = props.orders.filter(order => order.category === 'car')
    .reduce((amount, item) => parseInt(item.price) + amount, 0);

  let entertainmentAmount = props.orders.filter(order => order.category === 'entertainment')
    .reduce((amount, item) => parseInt(item.price) + amount, 0);

  if (foodAmount === 0) {
    foodAverage = 0;
  } else {
    console.log(parseInt(foodAmount), parseInt(props.totalPrice));
    foodAverage = parseInt(foodAmount) / parseInt(props.totalPrice) * 100;
    console.log(foodAverage)
  }

  if (carAmount === 0) {
    carAverage = 0;
  } else {
    carAverage = parseInt(carAmount) / parseInt(props.totalPrice) * 100;
  }

  if (entertainmentAmount === 0) {
    entertainmentAverage = 0;
  } else {
    entertainmentAverage = parseInt(entertainmentAmount) / parseInt(props.totalPrice) * 100;
  }

  categories.push(
    {name: 'food', amount: foodAverage},
    {name: 'car', amount: carAverage},
    {name: 'entertainment', amount: entertainmentAverage}
  );

  return (
    <>
      <div className='border w-75'>
        {props.orders.map(order => {
          return <Order
            key={order.id}
            name={order.name}
            price={order.price}
            category={order.category}
            deleteOrder={() => props.deleteOrder(order.id)}
          />
        })}
      </div>
      <Graph
        categories={categories}
      />
    </>
  )
};

export default Orders;