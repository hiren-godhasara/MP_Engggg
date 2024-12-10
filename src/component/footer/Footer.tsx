'use client'
import Link from "next/link"
import Image from 'next/image';
import styles from './Footer.module.scss'
import insta from '../../imageFolder/icons8-linkedin-60.png'
import fb from '../../imageFolder/icons8-facebook-60.png'
import wp from '../../imageFolder/icons8-whatsapp-60.png'
import logo from "../../imageFolder/logo.png";
const whatsappLink = 'https://wa.me/+919724009770';
const webSiteLink = 'http://www.mpengineering.c.in'
const faceBookLink = ''
const instagramLink = ''


export default function Footer() {
    return (
        <footer className={styles.container}>
            <div
                className={styles.footer}>
                <div className={styles.main}>

                    <Link href={webSiteLink} className={styles.head}>
                        <Image
                            src={logo}
                            alt='logo'
                            objectFit="cover"
                            className={styles.head1}
                        />
                    </Link>

                    {/* <p className={styles.p1}>
                        <span className={styles.ps1}>BITSSHADOW LLP</span>
                    </p> */}
                    <p className={styles.p1} >
                     45, Shreenathji Estate, Nr. PNB Bank,Phase-1 Vavtva GIDC, Vatva, Ahmedabad – 382445.                        
                    </p>
                    <div className={styles.p3}>
                        <Link href={instagramLink} target="_blank" rel="noopener noreferrer">
                            <Image src={insta} className={styles.img} alt="Insta" width={35} height={35} />
                        </Link>
                        <Link href={faceBookLink} target="_blank" rel="noopener noreferrer">
                            <Image src={fb} className={styles.img} alt="Fb" width={35} height={35} />
                        </Link>
                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <Image src={wp} className={styles.img} alt="Wp" width={35} height={35} />
                        </Link>
                    </div>
                </div>

                <div className={styles.p4}>
                    <div className={styles.h1}>
                        <ul className={styles.ul}>
                            <li>
                                <Link href={"/"} className={styles.gray}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"/aboutUs"} className={styles.gray}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/contactUs"} className={styles.gray}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.h1}>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                <Link href={"/clients"} className={styles.gray}>
                                    Clients
                                </Link>
                            </li>
                            <li>
                                <Link href={"/cart"} className={styles.gray}>
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.h1}>
                        <ul className={styles.ul}>
                            <li>
                                <Link href={"/returnPolicy"} className={styles.gray}>
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={"/privacyPolicy"} className={styles.gray}>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={"/shippingPolicy"} className={styles.gray}>
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={"/termsOfUse"} className={styles.gray}>
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copy}>
                <p className={styles.pcopy}>
                    @2024 <Link className={styles.span} href={webSiteLink}>MP ENGINEERING</Link> All Rights Reserved.
                </p>
            </div>
        </footer >
    )
}