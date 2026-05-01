import ProductCard from '@/components/ProductCard';
import { getProductsData } from '@/lib/data';
import React from 'react';

const ProductPage = async () => {

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    await delay(1000); // wait 1 sec
    const productData = await getProductsData();

    return (
        <div className='container mx-auto my-12'>

            <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-10 '>
                {
                    productData.map(product => <ProductCard product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};

export default ProductPage;