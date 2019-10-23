import React, {Component} from 'react';
import Orders from "../components/Orders/Orders";
import OrderForm from "../components/OrderForm/OrderForm";
import uuid from 'uuid';


class FinancialAccounting extends Component {
  state = {
    orders: [], // {name: "milk", price: "200", id: 123}
    categories: [{name: "Еда", value: "food"}, {name: "Развлечения", value: "entertainment"}, {name: "Машины", value: "car"}],
    orderName: '',
    orderPrice: '',
    category: 'food',
    totalPrice: 0,
  };

  deleteOrder = id => {
    const index = this.state.orders.findIndex(order => order.id === id);
    const orders = [...this.state.orders];
    const totalPrice = this.state.totalPrice - orders[index].price;
    orders.splice(index, 1);
    this.setState({orders, totalPrice});
  };
  isNumber = (n) => {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
  };

  addOrder = (e) => {
    e.preventDefault();
    let name,
      category,
      price;
    const isNum = this.isNumber(this.state.orderPrice);
    if (isNum) {
      if (this.state.orderPrice > 0) {
        price = this.state.orderPrice;
      }
    } else {
      alert("Вы ввели не число");
    }
    if (this.state.category) {
      category = this.state.category;
    } else {
      alert("Выберите категорию");
    }
    if (this.state.orderName) {
      name = this.state.orderName;
    } else {
      alert("Введите название");
    }
    if (price && category && name) {
      const order = {
        id: uuid(),
        name: this.state.orderName,
        price: this.state.orderPrice,
        category: this.state.category
      };
      const orders = [...this.state.orders];
      orders.push(order);
      this.setState({orders, totalPrice: parseInt(price) + parseInt(this.state.totalPrice)});
    }
  };

  priceChangeHandler = (e) => {
    const orderPrice = e.target.value;
    this.setState({orderPrice});
  };

  nameChangeHandler = (e) => {
    const orderName = e.target.value;
    this.setState({orderName});
  };

  categoryChangeHandler = e => {
    const category = e.target.value;
    this.setState({category});
  };

  render () {
    return (
      <div>
        <OrderForm
          addOrder={this.addOrder}
          price={this.state.orderPrice}
          name={this.state.orderName}
          categories={this.state.categories}
          categoryChangeHandler={this.categoryChangeHandler}
          nameChangeHandler={this.nameChangeHandler}
          priceChangeHandler={this.priceChangeHandler}
        />
        <Orders
          orders={this.state.orders}
          deleteOrder={this.deleteOrder}
          totalPrice={this.state.totalPrice}
        />
        <h1>total price: {this.state.totalPrice}</h1>
      </div>
    );
  }
}

export default FinancialAccounting;