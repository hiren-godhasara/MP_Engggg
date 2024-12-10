import Image from 'next/image';
import styles from './ImagePro.module.scss';
import i1 from '../../imageFolder/Horizontal Tank.png';
import i2 from '../../imageFolder/Jacketed Reactor.png';
import i3 from '../../imageFolder/Jacketed & Non Jacketed Receiver.png';
import i4 from '../../imageFolder/HeatExchanger.png';
import i5 from '../../imageFolder/Distillution Collumn.png';
import i6 from '../../imageFolder/Limpet Coil Reactor.png';


const ImagePro = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.header}>Our Products</h1>
            <div className={styles.gridContainer}>
                <div className={styles.imageWrapper}>
                    <Image src={i1} alt="HeatExchanger1" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Horizontal Tank</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={i2} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Jacketed reactor</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={i3} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Jacketed & Non Jacketed Receiver</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={i4} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Heat Exchanger</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={i5} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Distillation Column</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={i6} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Limpet Coil Reactor.png</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ImagePro;
