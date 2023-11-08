import React, { useContext,useEffect,useState } from 'react';
import OneProducts from './OneProducts';
import { Container } from './ContextApi';
import '../Shopping_Cart/Cart.css';

// const Cart = ({ cart, setCart }) => {
const Cart = ()=>{
  const {cart,setcart} = useContext(Container);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.Price),0));
  },[cart]);
  return (
    <div>
        <h1 className='x'> Total Price: {total }</h1>
        <h3 className='y'>Cart</h3>
        {cart.map((p)=>{
          return <OneProducts p={p} key={p.id} cart={cart} setcart={setcart} />;
      })}
    </div>
  );
};

export default Cart;

