import React from 'react';

const ProductsPage = async() => {

    const res = await fetch("http://localhost:5000/products")
    const products = await res.json();

    console.log(products);

    return (
        <div>
            <h1>Products</h1>
        </div>
    );
};

export default ProductsPage;