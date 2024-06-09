import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price) * el.quantity)
  return (<div>
      {props.orders.map(el => (
        <Order key={el.id}
        item={el}
        onDelete={props.onDelete}
        onUpdateOrder={props.onUpdateOrder} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}p.</p>
      <button type="submit" className='clearAll' onClick={props.onClear}>Очистить всё</button>
      <button type="submit" className='pay'>К оформлению</button>
  </div>)
}
const showNothing = () => {
  return (<div className='empty'>
    <h2>Корзина пока пуста :( </h2>
  </div>)
}
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>ShopTest</span>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? 
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
