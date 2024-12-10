import React from 'react';
import HomePage from '../component/homePageSection/HomePage';
import ProductRange from '../component/productRange/ProductRange';
import Company from '../component/company/Company';
import ImagePro from '../component/imagePro/ImagePro';

export default function Cart() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <HomePage />
            <Company />
            <div id='gallery'>
                <ImagePro />
            </div>
        </div>
    );
}


