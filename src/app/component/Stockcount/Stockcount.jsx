"use client"
import { Context } from '@/context/Context';
import React, { useContext } from 'react';

const Stockcount = ({singleProduct}) => {
    let {Pcart}=useContext(Context)
    const getProductStock = () => {
        const cartItem = Pcart.find((item) => item.id ===  singleProduct.id);
        return cartItem ? ( cartItem.quantity && cartItem.stock)  : singleProduct.stock;
      };
    

    return (
        <div>
        
      <div> {getProductStock()}</div>
        
        </div>
    );
};

export default Stockcount;