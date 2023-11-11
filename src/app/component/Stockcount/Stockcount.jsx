"use client"
import { Context } from '@/context/Context';
import React, { useContext } from 'react';

const Stockcount = ({singleProduct}) => {
    let {Pcart}=useContext(Context)
    
    const getProductStock = () => {
        const cartItem = Pcart.find((item) => item.id ===  singleProduct.id);
        return cartItem ? ( <div>
          <span>{cartItem.quantity}</span>/<span>{cartItem.stock}</span>
        </div> )  :( <div>
          <span>0</span>/<span>{singleProduct.stock}</span>
        </div> );
      };
    

    return (
        <div className='flex'>
        <span>Available Product:</span>
      <span className='font-bold'> {getProductStock()}</span>
        
        </div>
    );
};

export default Stockcount;