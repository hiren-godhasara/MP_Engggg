import Image from 'next/image';
import styles from './MainProducts.module.scss'
import image from '../../imageFolder/Heat Exchanger.png'
import Link from 'next/link';


const HeatExchnager = () => {
    return (
        <div className={styles.main}>
            <h1>Heat Exchnager / Condenser</h1>
            <div className={styles.info}>
                <div className={styles.container}>
                    <Image
                        src={image}
                        alt=''
                    />
                    <div className={styles.right}>
                        <h2>Heat Exchnager / Condenser</h2><br />
                        <p>We are manufacturing shell & tube type heat exchanger.
                            Shell and tube heat exchanger are most commonly used
                            in all industries like chemical, pesticides, refineries,
                            oil & gas, petrochemical, fertilizer plant, food plant etc.
                            It is built from mild steel & stainless steel materials.</p><br />
                        <h2>Capacity - 1.4 M2 to 100 M2</h2>
                        <h2>Pressure Range - Atm. to 25 KG/CM2G</h2>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeatExchnager;