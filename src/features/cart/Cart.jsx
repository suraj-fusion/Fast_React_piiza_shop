import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from "./CartItem"
import { clearCart, getCart, getCurrentQuantityById } from './cartSlice';
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const username=useSelector(state=>state.user.username);
 
    
  const dispatch=useDispatch()

  if(!cart.length) return <EmptyCart/>
  return (
    <div className='py-3 px-4'>
     <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h2 className='mt-7 text-xl font-semibold mb-7'>Your cart, {username}</h2>
      <ul className='divider-y divide-stone-200 border-b mt-3'>
        {cart.map((item)=>(<CartItem item={item} key={item.pizzaId}/>))}
      </ul>
      <div className='mt-6 space-x-2'>
      <Button to="/order/new" type="primary">Order Pizzas</Button>
     
      <Button type="secondary" onClick={()=>dispatch(clearCart())}>Clear Cart</Button>
        </div>
    </div>
  );
}

export default Cart;
