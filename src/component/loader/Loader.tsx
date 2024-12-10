// import React from 'react';
// import styles from './Loader.module.scss'


// const Loader = () => {
//     return (
//         <div className={styles.loading}>
//             <svg className={styles.svg} viewBox="25 25 50 50">
//                 <circle className={styles.circle} r="20" cy="50" cx="50"></circle>
//             </svg>
//         </div>
//     );
// };

// export default Loader
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.circular}>

            <div className={styles.circularG}>
                <div className={styles.circularG_1}></div>
                <div className={styles.circularG_2}></div>
                <div className={styles.circularG_3}></div>
                <div className={styles.circularG_4}></div>
                <div className={styles.circularG_5}></div>
                <div className={styles.circularG_6}></div>
                <div className={styles.circularG_7}></div>
                <div className={styles.circularG_8}></div>
            </div>
        </div>
    );
};

export default Loader;

