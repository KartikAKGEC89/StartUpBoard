import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/TextInput/TextInput'
import styles from './StepName.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../store/activateSlice'

const StepName = ({ onNext }) => {
  const {name} = useSelector((state) => state.activate)
  
  const dispatch = useDispatch();
  const [fullname, setFullName] = React.useState(name);
  
  const submit = async () => {
    if (!fullname) {
      return;
    }
    dispatch(setName(fullname));
    onNext();
  }
  return (
    <div className={styles.cardwrapper}>
     <Card tittle="What’s your full name?">
      <TextInput value={fullname} onChange={(event) => setFullName(event.target.value)} />
      <p className={styles.paragraph}>
        People use real names at codershouse :)
      </p>
      <div className={styles.buttonwrapper}>
        <Button text="Next" onClick={submit}></Button>
      </div>
     </Card>
    </div>
  )
}

export default StepName
