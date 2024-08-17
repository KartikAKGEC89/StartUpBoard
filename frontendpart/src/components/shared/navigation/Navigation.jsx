import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../images/EmojiHand.png';
import styles from './Navigation.module.css';
import { logout } from '../../../Api';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  async function logoutuser() {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  }

  const { isAuth, user } = useSelector((state) => state.auth);

  return (
      <nav className={`${styles.navbar} conatiner`}>
          <Link to="/" className={styles.decoration} >
              <img src={Logo} alt='Logo' width={40}/>
              <span  className={styles.space} >StartUp Board</span>
      </Link>
      { isAuth && <div className={styles.navRight}>
        <h3>{user.name}</h3>
        <Link to='/'>
          <img className={ styles.image } src={user.avatar} alt='avatar' width={40} height={40} />
        </Link>
        <button className={ styles.logout} onClick={logoutuser}>Logout</button>
      </div> }
    </nav>
  )
}

export default Navigation
