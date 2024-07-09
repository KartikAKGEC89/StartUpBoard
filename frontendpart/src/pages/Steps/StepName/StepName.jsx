import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/TextInput/TextInput'
import styles from './StepName.module.css'

const StepName = ({ onNext }) => {
  const [name, setName] = React.useState('');

  const submit = async () => {
    onNext();
  }
  return (
    <div className={styles.cardwrapper}>
     <Card tittle="What’s your full name?">
      <TextInput value={name} onChange={(event) => setName(event.target.value)} />
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
