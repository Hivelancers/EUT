import React, { useRef } from 'react';
import styles from './Explanation.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Explanation() {
  const splideRef = useRef(null);

  return (
    <div className={styles.explanation}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Como posso fazer a <br /> inscrição do meu time?
        </h1>
        <div className={styles.customArrows}>
          <button
            className={styles.arrow}
            onClick={() => splideRef.current?.go('<')}
          >
            <FaArrowLeft/>
          </button>
          <button
            className={styles.arrow}
            onClick={() => splideRef.current?.go('>')}
          >
            <FaArrowRight/>
          </button>
        </div>
      </div>

      <Splide
        ref={splideRef}
        className={styles.containerGrid}
        options={{
          type: 'slide',
          perPage: 3,
          pagination: false,
          arrows: false,
          drag: 'free',
          perMove: 1,
          gap: '1rem',
          padding: { left: 0, right: '22rem' },
        }}
      >
        <SplideSlide><div className={styles.containerBox}>Página 1</div></SplideSlide>
        <SplideSlide><div className={styles.containerBox}>Página 2</div></SplideSlide>
        <SplideSlide><div className={styles.containerBox}>Página 3</div></SplideSlide>
        <SplideSlide><div className={styles.containerBox}>Página 4</div></SplideSlide>
        <SplideSlide><div className={styles.containerBox}>Página 5</div></SplideSlide>
        <SplideSlide><div className={styles.containerBox}>Página 6</div></SplideSlide>
      </Splide>
    </div>
  );
}

export default Explanation;
