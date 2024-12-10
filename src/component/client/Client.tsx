import React from 'react';
import styles from './Client.module.scss';
import i1 from '../../imageFolder/1.jpg'
import i2 from '../../imageFolder/2.jpg'
import i3 from '../../imageFolder/3.jpg'
import i4 from '../../imageFolder/4.jpg'
import i5 from '../../imageFolder/5.jpg'
import i6 from '../../imageFolder/6.jpg'
import i7 from '../../imageFolder/7.jpg'
import i8 from '../../imageFolder/8.jpg'
import i9 from '../../imageFolder/9.jpg'
import i10 from '../../imageFolder/10.jpg'
import i11 from '../../imageFolder/11.jpg'
import i12 from '../../imageFolder/12.jpg'
import i13 from '../../imageFolder/13.jpg'
import i14 from '../../imageFolder/14.jpg'
import i15 from '../../imageFolder/15.jpg'
import i16 from '../../imageFolder/16.jpg'
import i17 from '../../imageFolder/17.jpg'
import i18 from '../../imageFolder/18.jpg'
import i19 from '../../imageFolder/19.jpg'
import i20 from '../../imageFolder/20.jpg'
import i21 from '../../imageFolder/21.jpg'
import i22 from '../../imageFolder/22.jpg'
import i23 from '../../imageFolder/23.jpg'
import i24 from '../../imageFolder/24.jpg'
import Image from 'next/image';

const images = [
    i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12,
    i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24
];

const Client = () => {
    return (
        <>
            <h1 className={styles.head}>Our Clients</h1>
            <div className={styles.aboutContainer}>
                <div className={styles.gridContainer}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageItem}>
                            <Image src={image} alt={`Client ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Client;


