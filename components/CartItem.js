import { useShoppingCart } from "../context/ShoppingCartContext";
import {Item} from "../data/item"
import { Button, Stack } from "react-bootstrap";
export function CartItem ({id,quantity}){
    const { removeFromCart} =useShoppingCart ()
    const item = Item.find(element => element.id === id)
    
    if (item == null) return null

    return (
        <Stack direction ="horizontal" gap ={2}>
            <img src={item.imgUrl} style={{width: "125px", height:"100px" ,ObjectFit:"cover"}}></img>
        <div className="me-auto">
            <div>
                {item.name} {quantity > 1 && 
                <span 
                className="text-muted"
                style={{fontSize :".65rem"}}
                >
                {quantity} x    
                </span>}
            </div>
            <div className="text-muted" style={{fontSize :"0.75rem"}}>{item.price}</div>
            <div>{item.price * quantity}</div>
        </div>
        <Button variant ="outline-danger" size="sm" onClick={() =>removeFromCart(item.id)}>&times;</Button>
        </Stack>

        
    )
}