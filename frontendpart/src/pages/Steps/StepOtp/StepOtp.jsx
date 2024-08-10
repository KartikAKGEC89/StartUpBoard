import React from 'react'
import Card from '../../../components/shared/Card/Card'
import styles from './StepOtp.module.css'
import TextInput from '../../../components/shared/TextInput/TextInput'
import Button from '../../../components/shared/Button/Button'
import { verifyotp } from '../../../Api/index'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../store/authSlice'


const Stepotp = ({ onNext }) => {
  const [otp, setOtp] = React.useState('');
  const dispatch = useDispatch();
  const {phone, hash} = useSelector((state) => state.auth.otp)

  async function submit() {
    if (!otp || !phone || !hash) return;
    try {
      const { data } = await verifyotp({ otp, phone, hash })
      console.log(data)
      dispatch(setAuth(data));
      // onNext();
    } catch (error) {
      console.log(error);
    }
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
