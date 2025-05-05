import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
        <h1 className={styles.title}>SOBRE NÓS</h1>
        <div className={styles.container}>
            <div className={styles.containerBox}></div>
        </div>
    </div>
  );
}

export default About;