"use client"
import { Context } from '@/context/Context';
import React, { useContext } from 'react';

const Purchase = () => {
    const {Pcart}=useContext(Context)
    return (
        <div>
          <div>
            <h1 className='font-bold text-3xl px-10 py-5 uppercase'>All Purchased Item </h1>
          </div>
              <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-2  px-10 '>
            {
               Pcart?.map(p =>(
                
                     <div className="card max-w-md bg-warning text-warning-content" key={p?.id}>
 <div className="card-body">
   <h2 className="card-title">{p?.title}</h2>
   <p>${p?.price}</p>
   <p>Quantity: {p?.quantity}</p> 
   
 </div>
</div>
                  
               ))
           }
           </div> 
        </div>
    );
};

export default Purchase;