import Image from 'next/image';
import styles from './MainProducts.module.scss'
import image from '../../imageFolder/Storage Tank.png'
import Link from 'next/link';
import { products } from '../../data/subProducts'


const StorageTank = () => {
    return (
        <div className={styles.main}>
            <h1>Stroage Tank / Receiver</h1>

            <div className={styles.info}>
                <div className={styles.container}>
                    <Image
                        src={image}
                        alt=''
                    />
                    <div className={styles.right}>
                        <h2>Stroage Tank / Receiver</h2><br />
                        <p>We are manufacturing different type of storage like
                            round tank, square tank, rectangular tank etc. It is
                            widely use in chemicals, pharmaceuticals, pesticide,
                            dairy, dyes & intermediates industries for storage water,
                            hazardous chemical, mineral oils, acids etc. It is built
                            from mild steel & stainless steel materials.</p><br />
                        <h2>Types of Stroage Tank / Receiver</h2>
                        <ol style={{ listStyle: 'decimal', marginLeft: '20px' }}>
                            {
                                products.map((product, index) => {
                                    {
                                        if (product.type == "tank") {
                                            return (

                                                <li key={index}>
                                                    <Link href={`product/${product.key}`}>{product.title}</Link>
                                                </li>
                                            );
                                        }
                                    }
                                })
                            }
                        </ol><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorageTank;