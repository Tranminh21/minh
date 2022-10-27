import { createContext,useContext,useState, } from "react";
import { ShoppingCart } from "../components/ShoppingCart";


const ShoppingCartContext = createContext({})


export function useShoppingCart (){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({children} ) {
    const [Open,setOpen] = useState(false)
    const [cartItems,setCartItems] =useState([])


    const cartQuantity = cartItems.reduce((quantity,item) => item.quantity +quantity, 0
    )
    console.log(cartQuantity)

    const openCart = () => setOpen(true)
    const closeCart = () => setOpen (false)

    function getItemQuantity(id) {
      return cartItems.find (item => item.id  === id)?.quantity || 0
  }

  function increaseCartQuantity(id) {
      setCartItems(currItems => {
          if (currItems.find(item =>item.id ===id) == null){
              return [...currItems, {id,quantity:1}]
          } else {
              return currItems.map(item => {
                  if (item.id === id){
                      return {...item, quantity: item.quantity +1}
                  }
              })
          }
      })
  }
  function decreaseCartQuantity(id) {
      setCartItems(currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1) {
          return currItems.filter(item => item.id !== id)
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
        }
      })
    }
    function removeFromCart(id) {
      setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
      })
    }

    return (
        <ShoppingCartContext.Provider value ={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity,
        }}>
            {children}
            <ShoppingCart Open={Open}/>
        </ShoppingCartContext.Provider>
    )
}