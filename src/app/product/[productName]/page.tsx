import React from 'react';
import SubProducts from '../../../component/subProducts/SubProducts';
import { products } from '../../../data/subProducts';

// Generate static parameters for the dynamic route
export async function generateStaticParams() {
    return products.map((product) => ({
        productName: product.key, // Ensure `key` matches the dynamic route parameter
    }));
}

export default function ProductName({ params }: { params: { productName: string } }) {
    const specificProduct = products.find((product) => product.key === params.productName);

    if (!specificProduct) {
        return (
            <div style={{ backgroundColor: 'white', padding: '20px' }}>
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: 'white' }}>
            <SubProducts data={specificProduct} />
        </div>
    );
}
