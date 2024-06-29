import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import styles from './Home.module.css';
import Button from '../../components/shared/Button/Button';

const Home = () => {
  const navigate = useNavigate();
  const Register = () => {
    navigate('/register');
  }
  return (
  <div className={styles.cardwrraper}>
    <Card tittle="Welcome to StartUpBoard">
      <p className={styles.middle}>
        We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)
      </p>
      <Button onClick={Register} text="Get your username"></Button>
      <div className={styles.text}>
        <span>Have an invite text?</span>
        <Link to="/login" className={styles.link}>Sign in</Link>
      </div>
    </Card>
  </div>
  )
}

export default Home
