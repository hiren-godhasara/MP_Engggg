'use-client'
import Image from 'next/image';
import styles from './SubProducts.module.scss'
import image from '../../imageFolder/r2.webp'

const SubProducts = ({ data }: any) => {

    return (
        <div className={styles.main}>
            <h1>{data.title}</h1>
            <div className={styles.container}>
                <div className={styles.imgDiv}>
                    {data.images.map((image, index) => (
                        <>
                            <Image key={index} src={image.imgSrc} alt={`image-${index}`} className={styles.imgDiv1} />
                            <br />
                        </>
                    ))}
                </div>

                <div className={styles.right}>
                    {data.description.map((desc, index) => (
                        <>
                            <p key={index}>{desc.para}</p>
                            <br />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SubProducts;