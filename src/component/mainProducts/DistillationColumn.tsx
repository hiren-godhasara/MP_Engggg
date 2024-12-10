import Image from 'next/image';
import styles from './MainProducts.module.scss'
import image from '../../imageFolder/Disrtillation Collumn.png'

const DistillationColumn = () => {
    return (
        <div className={styles.main}>
            <h1>Distillation Column</h1>
            <div className={styles.info}>
                <div className={styles.container}>
                    <Image
                        src={image}
                        alt=''
                    />
                    <div className={styles.right}>
                        <h2>Distillation Column</h2><br />
                        <p>Distillation columns are one of the mostly commonly
                            used separation unit to separate the mixture into in
                            component parts, based on the different velocity &
                            boiling point. It is built from mild steel & stainless steel
                            materials. Also manufacturing by length and size.</p><br />
                        <h2>Shell Diameter - Ø 250mm to Ø 1200mm</h2>
                        <h2>Length - up to 25 MTR</h2>
                        <br />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DistillationColumn;