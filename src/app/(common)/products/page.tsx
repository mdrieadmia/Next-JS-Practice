import ProductCard from '@/components/ProductCard';
import { ProductsInfo } from '@/type';
import React from 'react';

const ProductsPage = async() => {


    const res = await fetch("http://localhost:5000/products", {
        next : {
            revalidate: 30
        }
    });
    const products = await res.json();

    console.log(products);

    return (
        <div className='grid grid-cols-6 gap-4'>
            {
                products.map((product : ProductsInfo)=>{

                    return <ProductCard key={product ?.id} product={product}></ProductCard>
                })
            }
        </div>
    );
};

export default ProductsPage;