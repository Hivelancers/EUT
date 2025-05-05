import React from 'react';
import styles from './Support.module.css';

function Support() {
  return (
    <div className={styles.support}>
        <h1 className={styles.title}>SUPORTE</h1>
        <div className={styles.containerGrid}>
            <div className={styles.containerBox}></div>

            <div className={styles.containerBox}></div>

            <div className={styles.containerBox}></div>

            <div className={styles.containerBox}></div>
        </div>
    </div>
  );
}

export default Support;