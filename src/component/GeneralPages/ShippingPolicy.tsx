import styles from './ShippingPolicy.module.scss';

const ShippingPolicy = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.detailsContainer}>
                <h1 className={styles.head}>Shipping Policy</h1>
                <p>At MyDryFruit, we are dedicated to ensuring the accurate delivery of your order, maintaining its quality, and always meeting the promised delivery timelines as communicated by our customer care team or displayed on our website.</p>
                <br />
                <div className={styles.details1}>
                    <div className={styles.p}>Below are some key points related to shipping:</div> <br />
                    <p>Each order will be shipped only to a single destination address specified during the payment process.</p> <br />
                    <p>We endeavor to dispatch each item in your order on the same day as the order date. However, in certain cases, it may take up to 2 or more working days to ship the order due to high demand or procurement delays.</p>
                </div>

                <div className={styles.details1}>
                    <div className={styles.p}>Delivery Timelines:</div> <br />
                    <p>For Surat & Nearby Areas - Within 24 Hours Only.</p>
                    <p>Delivery For All Metro Cities – Within 2 to 5 Days Only.</p>
                    <p>Delivery For All Non-Metro Cities – Within 6 to 8 Days Only.</p>
                </div>

                <div className={styles.details1}>
                    <p><strong>Please note:</strong> In special cases, such as unforeseen circumstances or logistical challenges, delivery may take up to 10 days. We appreciate your understanding and patience in such situations.</p>
                    <p>We have partnered with some of the most trusted courier companies across India to ensure reliable delivery.</p> <br />
                    <p>We gladly accept Cash on Delivery (COD) orders through our website and social media platforms.</p> <br />
                    <p>For any further queries or assistance regarding shipping, feel free to contact our customer support team at mydryfruitinfo@gmail.com or by mobile at +91 9157059719.</p> <br />
                    <p>Thank you for choosing MyDryFruit for your needs. We look forward to serving you with the finest quality products and exceptional service.</p>
                </div>




            </div>
        </div >
    )
}
export default ShippingPolicy;