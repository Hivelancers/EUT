import React from 'react';
import styles from './Promo-Banner.module.css';

function PromoBanner() {
  return (
    <div className={styles.banner}>
        <h1 className={styles.description}>jogue agora o nosso mais novo campeonato de cs2 / dispute pelo premio de 500 reais em dinheiro / faça ja sua inscrição clicando aqui
        </h1>
    </div>
  );
}

export default PromoBanner;