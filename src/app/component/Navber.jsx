"use client"
import { Context } from '@/context/Context';
import Link from 'next/link';
import React, { useContext } from 'react';

const Navber = () => {
  const { cart } = useContext(Context)
  const totalquantity = cart.length
  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">EYE-COMMERCE</a>
        </div>
        <div className="flex-none list-none">

          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/purchase'}>Purchase list</Link>
            </li>
          </ul>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                {totalquantity == 0 ? <span className="badge badge-sm indicator-item">0</span> : <span className="badge badge-sm indicator-item">{totalquantity}</span>}
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">

                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    <Link href={'/cart'}>View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navber;