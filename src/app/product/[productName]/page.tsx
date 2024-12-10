import React from 'react';
import SubProducts from '../../../component/subProducts/SubProducts';
import { products } from '../../../data/subProducts'

export default function ProductName({ params }: any) {
    const specificProduct = products.find(product => product.key === params.productName);
    return (

        <div style={{ backgroundColor: 'white' }}>
            <SubProducts data={specificProduct} />
        </div>
    );
}
