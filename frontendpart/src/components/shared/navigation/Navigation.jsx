import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../images/EmojiHand.png';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
      <nav className={`${styles.navbar} conatiner`}>
          <Link to="/" className={`${styles.decoration}`} >
              <img src={Logo} alt='Logo' width={40}/>
              <span  className={`${styles.space}`} >StartUp Board</span>
          </Link>
    </nav>
  )
}

export default Navigation
