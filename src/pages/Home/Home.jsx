import React from 'react';
import styles from './Home.module.css';
import Hero from './Hero/Hero'
import Explanation from './Explanation/Explanation';
import Support from './Support/Support';
import About from './About/About';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <section className={styles.home}>
        <Hero />
        <Explanation />
        <Support />
        <About />
        <Footer />
    </section>
  );
}

export default Home;