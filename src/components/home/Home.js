import React from 'react'

import styles from './Home.module.scss'
import logoImage from 'assets/logo.png'

const Home = () => (
  <>
    <div className={`${styles.home} ${styles.active}`}>Home</div>
    <img src={logoImage} alt="Logo" />
  </>
)

export default Home
