import React from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './StepPhoneEmail.module.css';
import Phonevector from '../../../images/VectorMobile.png';
import Emailvector from '../../../images/VectorEmail.png';

const phoneEmailMap = {
  phone: Phone,
  email: Email
}

const StepPhoneEmail = ({ onNext }) => {
  const [state, setState] = React.useState('phone');
  const Step = phoneEmailMap[state];

  return (
    <>
    <div className={styles.cardwrapper}>
      <div>
        <div className={styles.buttonwrapper}>
          <button onClick={() => setState('phone')} className={`${styles.tabButton} ${state === 'phone' ? styles.active : ''}`}>
            <img src={Phonevector} alt='phone' />
          </button>
          <button onClick={() => setState('email')} className={`${styles.tabButton} ${state === 'email' ? styles.active : ''}`}>
            <img src={Emailvector} alt='email' />
          </button>
        </div>
        <Step onNext={onNext} />
      </div>
    </div>
    </>
  )
}

export default StepPhoneEmail
