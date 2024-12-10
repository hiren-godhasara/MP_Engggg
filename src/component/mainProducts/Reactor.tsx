import Image from 'next/image';
import styles from './MainProducts.module.scss'
import image from '../../imageFolder/Reactor Vessel.png'
import Link from 'next/link';
import { products } from '../../data/subProducts'


const Reactor = () => {
    return (
        <div className={styles.main}>
            <h1>Reactor / Vessel</h1>

            <div className={styles.info}>
                <div className={styles.container}>
                    <Image
                        src={image}
                        alt=''
                    />
                    <div className={styles.right}>
                        <h2>Reactor / Vessel</h2><br />
                        <p>We are manufacturing different type of reactor /
                            pressure vessel as per Client Requirement. It is widely
                            use in chemicals, pharmaceuticals, petrochemical,
                            fertilizer plant & pesticide industries. It is built from
                            mild steel & stainless steel materials.</p><br />
                        <h2>Capacity - 0.5 KL to 10 KL</h2>
                        <h2>Pressure - Atm. to 15 KG/CM2G</h2><br />
                        <h2>Types of Chemical Reactor</h2>
                        <ol style={{ listStyle: 'decimal', marginLeft: '20px' }}>
                            {
                                products.map((product, index) => {
                                    {
                                        if (product.type == "reactor") {
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

export default Reactor;