import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          img: '1.jpg',
          title: "товар1",
          price: "50",
        },
        {
          id: 2,
          img: '2.jpg',
          title: "товар2",
          price: "100",
        },
        {
          id: 3,
          img: '3.jpg',
          title: "товар3",
          price: "150",
        },
        {
          id: 4,
          img: '4.jpg',
          title: "товар4",
          price: "200",
        },
        {
          id: 5,
          img: '5.jpg',
          title: "товар5",
          price: "250",
        },
        {
          id: 6,
          img: '1.jpg',
          title: "товар6",
          price: "300",
        },
        {
          id: 7,
          img: '2.jpg',
          title: "товар7",
          price: "350",
        },
        {
          id: 8,
          img: '3.jpg',
          title: "товар8",
          price: "400",
        },
        {
          id: 9,
          img: '4.jpg',
          title: "товар9",
          price: "450",
        },
        {
          id: 10,
          img: '5.jpg',
          title: "товар10",
          price: "500",
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.clearAllOrders = this.clearAllOrders.bind(this)
    this.updateOrder = this.updateOrder.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders = {this.state.orders} 
        onDelete = {this.deleteOrder} 
        onClear = {this.clearAllOrders} 
        onUpdateOrder = {this.updateOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  clearAllOrders(){
    this.setState({ orders: [] });
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray){
      this.setState({orders: [...this.state.orders, item]})
    }
  }
  updateOrder = (id, quantity) => {
    this.setState({
      orders: this.state.orders.map((el) => {
        if (el.id === id) {
          el.quantity = quantity
        }
        return el
      })
    })
  }
}

export default App;
