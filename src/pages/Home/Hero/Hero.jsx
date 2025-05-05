import React from 'react';
import styles from './Hero.module.css';
import PromoBanner from '../../../components/Promo-Banner/Promo-Banner';
import Caroussel from '../../../components/Caroussel/Caroussel';

function Home() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>SUA JORNADA NO GAME COMEÇA AQUI</h1>
      <Caroussel />
    </div>
  );
}

export default Home;