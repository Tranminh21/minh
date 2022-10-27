import { Stack } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { Item } from '../data/item';

export function ShoppingCart ({ Open }) {
    const {closeCart, cartItems} = useShoppingCart ()
    return ( 
     <div>
    <Offcanvas show = {Open} onHide = {closeCart} placement ="end">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap ={3}>
                {cartItems.map(item => (
                    <CartItem key = {item.id} {...item}/>
                ))}
                <div className='ms-auto fw-bold fs-5'>
                    Total{" "}
                   {
                    cartItems.reduce((total, cartItem) => {
                        const item = Item.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                      }, 0)
                   }
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    </div>
)
}