import React from 'react'
import styles from './Card.module.css';
import Logo from '../../../images/VectorLogo.png';

const Card = ({tittle, children}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={Logo} alt='Logo' />
        <span className={styles.head}>{tittle}</span>
      </div>
      { children }
    </div>
  )
}

export default Card
