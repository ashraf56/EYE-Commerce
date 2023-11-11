"use client"
import { GlobalState } from '@/context/Context';
import React from 'react';

const ContextproviderHome = ({children}) => {
    return (
        <GlobalState>{children}</GlobalState>
    );
};

export default ContextproviderHome;