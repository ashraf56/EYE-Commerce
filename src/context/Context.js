"use client"
import { createContext,  useEffect, useState } from "react"
import toast from "react-hot-toast"

export const  Context= createContext(null)

export const GlobalState = ({children})=>{
const [cart,setCart]=useState([])
const [Pcart,setPCart]=useState([])

// this function is for removing cart item from localstorage  
const removeCartItem = (itemId) => {
  const updatedCart = cart.filter((item) => item.id !== itemId);
  localStorage.setItem("cartdata", JSON.stringify(updatedCart));
  setCart(updatedCart);
  
};

// This function is for add to cart
const handlecartItem = (getItem)=>{
 let maincart = [...cart]
let cartindex= maincart.findIndex(product=> product.id=== getItem.id)
if (cartindex === -1) {
  //if no item in the cart
    maincart.push({...getItem, quantity:1})
    toast.success('added')
}else{
//if item already in the cart 
  maincart[cartindex].quantity= maincart[cartindex].quantity +1;
  toast.success('added')
}
setCart(maincart)
localStorage.setItem("cartdata",JSON.stringify(maincart))


}


// This function created for payment 
const handlePurchaseItem = (getItem)=>{
  let maincart1 = [...Pcart]

   let cindex= maincart1.findIndex(p=> p.id === getItem.id)
   if (cindex === -1) {
      maincart1.push({...getItem})
  } 
  const updatedMainCart = maincart1.map((item) => {
    if (item.id === getItem.id && item.stock >item.quantity) {
      return {
        ...item,
        stock: item.stock - item.quantity,
      };
    }
    return item;
  });
 setPCart(updatedMainCart)
 localStorage.setItem("purchasedata",JSON.stringify(updatedMainCart))
 removeCartItem(getItem.id)
 }


useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("cartdata")) || [])
    setPCart(JSON.parse(localStorage.getItem("purchasedata")) || [])
},[])

let value = {
    cart,handlecartItem,removeCartItem,handlePurchaseItem,Pcart
}
    return(
<Context.Provider value={value}>{children}</Context.Provider>
    )
}

