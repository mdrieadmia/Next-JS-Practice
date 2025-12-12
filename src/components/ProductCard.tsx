import { ProductsInfo } from '@/type';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}:{product:ProductsInfo}) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-3">
    <div className="relative">
        <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={250}
            className="w-full h-[220px] object-cover rounded-lg"
        />

        {/* Rating Badge */}
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
            ⭐ {product.rating}
        </span>
    </div>

    {/* Info */}
    <div className="mt-3 space-y-1">
        <h1 className="text-gray-900 font-semibold text-lg line-clamp-1">
            {product.name}
        </h1>

        <h2 className="text-gray-700 font-bold text-xl">
            {product.price} {product.currency}
        </h2>

        <div className="flex items-center justify-between mt-2">
            <span
                className={`text-sm ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
            >
                {product.stock > 0 ? "In stock" : "Out of stock"}
            </span>

            <span className="text-sm text-gray-500">
                {product.reviews} reviews
            </span>
        </div>
    </div>

    {/* Button */}
    <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-700 transition">
        Add to Cart
    </button>
</div>

    );
};

export default ProductCard;