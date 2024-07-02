import React from 'react'
import Card from '../../../components/shared/Card/Card'
import styles from './StepOtp.module.css'
import TextInput from '../../../components/shared/TextInput/TextInput'
import Button from '../../../components/shared/Button/Button'


const Stepotp = ({ onNext }) => {
  const [otp, setOtp] = React.useState('')
  return (
    <>
      <div className={styles.cardwrapper}>
        <Card tittle="Enter the code we just texted you">
          <TextInput value={otp} onChange={(event) => setOtp(event.target.value)} />
          <p className={styles.paragraph}>Didn’t receive? Tap to resend
          </p>
          <div className={styles.buttonwrapper}>
            <Button text="Next"></Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Stepotp
