import React from 'react'
import Card from '../../../components/shared/Card/Card'
import styles from './StepOtp.module.css'
import TextInput from '../../../components/shared/TextInput/TextInput'
import Button from '../../../components/shared/Button/Button'
import { verifyotp } from '../../../Api/index'
import { useSelector } from 'react-redux'


const Stepotp = ({ onNext }) => {
  const [otp, setOtp] = React.useState('');

  const {phone, hash} = useSelector((state) => state.auth.otp)

  async function submit() {
    try {
      const { data } = await verifyotp({ otp, phone, hash })
      console.log(data)
    } catch (error) {
      console.log(error);
    }
    // onNext();
  }
  return (
    <>
      <div className={styles.cardwrapper}>
        <Card tittle="Enter the code we just texted you">
          <TextInput value={otp} onChange={(event) => setOtp(event.target.value)} />
          <p className={styles.paragraph}>Didn’t receive? Tap to resend
          </p>
          <div className={styles.buttonwrapper}>
            <Button onClick={submit} text="Next"></Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Stepotp
