import React from 'react';
import styles from './Caroussel.module.css';
import cs2 from '../../assets/cs2.jpg'

function Caroussel() {
  return (
    <div className={styles.caroussel}>
        <img className={styles.img} src={cs2} alt="" />
        <div className={styles.infoContainer}>
            <p>Optimal Services</p>
        </div>
        <div className={styles.container}>
        <div className={styles.gridDescription}>
            <div className={styles.containerDescription}>
                <p >Comphrensive tennis</p>
                <p>training for everyone</p>
            </div>
            <div className={styles.containerDescription}>
                <span className={styles.descriptionNumbers}>1.9M+</span>
                <span>Global invites</span>
            </div>
            <div className={styles.containerDescription}>
                <span className={styles.descriptionNumbers}>1.9M+</span>
                <span>Global invites</span>
            </div>
            <div className={styles.containerDescription}>
                <span className={styles.descriptionNumbers}>1.9M+</span>
                <span>Global invites</span>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Caroussel;