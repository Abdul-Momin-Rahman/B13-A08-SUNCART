'use client'
import { useParams } from 'next/navigation';
import React from 'react';

const ProductDetailsPage = () => {

    const {id} = useParams();
    return (
        <div>
            This is Product Details page. You are watching this product : {id}
        </div>
    );
};

export default ProductDetailsPage;