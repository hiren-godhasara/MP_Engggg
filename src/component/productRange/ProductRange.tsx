import Link from 'next/link';
import styles from './ProductRange.module.scss';

const ProductRange = () => {
    return (
        <>
            <h1 className={styles.h1}>Our Product Range</h1>
            <div className={styles.main}>
                <div className={styles.category}>
                    <span className={styles.ul}>Reactor</span>
                    <ul className={styles.ul1}>
                        <Link href=''><li>Chemical Reactor</li></Link>
                        <Link href=''><li>Limpeted Reactor</li></Link>
                        <Link href=''><li>Jacketed Reactor</li></Link>
                        <Link href=''><li>Mixing Vessel</li></Link>
                        <Link href=''><li>Reactor Vessel</li></Link>
                        <Link href=''><li>Chemical Agitated Reactor</li></Link>
                        <Link href=''><li>Polymer Chemical Reactor</li></Link>
                        <Link href=''><li>Chemical Limpeted Reactor</li></Link>
                        <Link href=''><li>Limpet Coil Reactor</li></Link>
                        <Link href=''><li>Agitated Reactor</li></Link>
                        <Link href=''><li>SS Limpeted Reactor</li></Link>
                    </ul>
                </div>

                <div className={styles.category}>
                    <span className={styles.ul}>Dryer</span>
                    <ul className={styles.ul1}>
                        <Link href=''><li>Industrial Dryer</li></Link>
                        <Link href=''><li>Atmospheric Tray Dryer</li></Link>
                        <Link href=''><li>Vacuum Tray Dryer</li></Link>
                        <Link href=''><li>Fluid Bed Dryer</li></Link>
                        <Link href=''><li>Rotary Cone Vacuum Dryer</li></Link>
                        <Link href=''><li>Rotary Vacuum Paddle Dryer (RVPD)</li></Link>
                        <Link href=''><li>Ribbon Roster Cum Dryer</li></Link>
                    </ul>
                </div>

                <div className={styles.category}>
                    <span className={styles.ul}>Pharmaceutical Equipments</span>
                    <ul className={styles.ul1}>
                        <Link href=''><li>Pharma Plant</li></Link>
                        <Link href=''><li>Pharmaceutical Equipment</li></Link>
                        <Link href=''><li>Filter</li></Link>
                        <Link href=''><li>Nutsche Filter</li></Link>
                        <Link href=''><li>Pressure Nutsche Filter (PNF)</li></Link>
                        <Link href=''><li>Vacuum Nutsche Filter (VNF)</li></Link>
                        <Link href=''><li>Sparkler Filter</li></Link>
                    </ul>
                </div>

                <div className={styles.category}>
                    <span className={styles.ul}>Blender</span>
                    <ul className={styles.ul1}>
                        <Link href=''><li>Blender</li></Link>
                        <Link href=''><li>Ribbon Blender</li></Link>
                        <Link href=''><li>Double Cone Blender</li></Link>
                        <Link href=''><li>Octagonal Blender</li></Link>
                        <Link href=''><li>Sigma Kneader Mixer</li></Link>
                        <Link href=''><li>Plough Shear Mixer</li></Link>
                        <Link href=''><li>Twin Shaft Mixer</li></Link>
                    </ul>
                </div>

                <div className={styles.category}>
                    <span className={styles.ul}>Other</span>
                    <ul className={styles.ul1}>
                        <Link href=''><li>SS Storage Tank</li></Link>
                        <Link href=''><li>Oil Storage Tank</li></Link>
                        <Link href=''><li>Herbal Extraction Plant</li></Link>
                        <Link href=''><li>Chemical Process Equipment</li></Link>
                        <Link href=''><li>Powder Transfer System</li></Link>
                        <Link href=''><li>Pneumatic Conveying System</li></Link>
                    </ul>
                </div>
            </div>
        </>

    );
};

export default ProductRange;
