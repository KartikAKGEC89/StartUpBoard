import React from 'react'
import styles from './TextInput.module.css'

const TextInput = (props) => {
  return (
    <div>
        <input className={styles.textinput} type='text' {...props} />
    </div>
  )
}

export default TextInput
