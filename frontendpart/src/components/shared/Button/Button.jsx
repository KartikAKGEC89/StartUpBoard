import React from 'react'
import styles from './Button.module.css';
import Arrow from '../../../images/VectorArrow.png';

const Button = ({text, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className={styles.buttonmade}>
          <span>{ text }</span>
          <img className={styles.arrow } src={Arrow} alt='arrow' />
        </button>
    </div>
  )
}

export default Button
