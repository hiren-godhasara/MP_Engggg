
import React from 'react';
import styles from './Compamy.module.scss';

const Company = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.head1}>
                Limpet Coil Reactor, Jacketed Reactor, GMP Model, Horizontal Tank, Pressure Tank, Silo, Jacketed & Non Jacketed Receiver,Distillation Column,Heat Exchanger and Condensor Suppliers and Exporters.
            </h1>
            <div className={styles.head}>
                MP ENGINEERING
            </div>
            <p className={styles.subHead}>
                M.P. ENGINEERING, situated in the heart of Gujarat&apos; Vatva GIDC,
                is dedicated to the precision design and manufacturing of top-tier
                stainless steel and carbon steel equipment. Our expertise extends
                to crafting Condensers, Receivers, Storage Tanks, Distillation
                Columns, and Reactors of impeccable quality.
            </p><br />
            <p className={styles.subHead}>
                With over 8 years of experience in the realm of process equipment
                design and manufacturing, M.P. Engineering stands as a prominent
                name in the field. Our company boasts an extensive portfolio of
                process equipment, offering manufacturing and supply across a
                broad spectrum.
            </p><br />
            <p className={styles.subHead}>
                As an organization committed to growth and excellence, we
                continuously harness new technologies, resulting in a remarkable
                evolution in our performance and delivery capabilities. We take
                pride in upholding the highest quality standards, fostering innovative
                ideas, and responding promptly to the unique requirements of our
                valued customers.
            </p>
            <p className={styles.head}>Our Products</p>
            <ul style={{ listStyleType: 'disc', fontWeight: 700 }} >
                <li className={styles.li}><a href="/distillation-column">DISTILLATION COLUMN</a> </li>
                <li className={styles.li}><a href="/storage-tank">STORAGE TANK / RECEIVER</a> </li>
                <li className={styles.li}><a href="/heat-exchanger">HEAT EXCHANGER / CONDENSER</a> </li>
                <li className={styles.li}><a href="/reactor">REACTOR / VESSEL</a> </li>
            </ul>
        </div>
    );
};

export default Company;


