import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
  }

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 })
    this.props.onUpdateOrder(this.props.item.id, this.state.quantity + 1)
  }

  handleDecrement = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 })
      this.props.onUpdateOrder(this.props.item.id, this.state.quantity - 1)
    }
  }
  render() {
    const { item, onDelete, onUpdateOrder } = this.props
    const { quantity } = this.state
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}p., {this.state.quantity} шт. = {this.props.item.price * this.state.quantity} p.</p>
        <div className="quantity-controls">
          <button onClick={this.handleDecrement}>-</button>
          <span>{this.state.quantity}</span>
          <button onClick={this.handleIncrement}>+</button>
        </div>
        <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order