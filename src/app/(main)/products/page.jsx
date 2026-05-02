import ProductCard from '@/components/ProductCard';
import { getProductsData } from '@/lib/data';
import { Spinner } from '@heroui/react';
import React from 'react';

const ProductPage = async () => {

    const productData = await getProductsData();

    return (
        <div className='container mx-auto my-12'>

            <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-10 '>
                {productData ?
                    productData.map(product => <ProductCard product={product} key={product.id} />) :
                    <div className="flex flex-col items-center gap-2">
                        <Spinner color="success" />
                        <span className="text-xs text-muted">Success</span>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductPage;