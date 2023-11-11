import { getAllProduct } from '@/util/getAllProduct';
import Link from 'next/link';
import React from 'react';

const Allproduct = async() => {
const {products}  = await getAllProduct();


    return (
        <div className='items-center py-10'>
<div>
            <h1 className='font-bold text-3xl px-10 py-5 uppercase'>All Product </h1>
          </div>
         <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-2  px-10 '>
            
             {
                products?.map(p =>(
                 
                      <div className="card max-w-full md:max-w-md bg-warning text-warning-content" key={p?.id}>
  <div className="card-body">
    <h2 className="card-title">{p?.title}</h2>
    <p>${p?.price}</p>
    <div className="card-actions justify-end">
      <button className="btn">
        <Link href={`/productdetail/${p?.id}`} >Buy now</Link>
      </button>
    </div>
  </div>
</div>
                   
                ))
            }
            </div>  
        </div>
    );
};

export default Allproduct;