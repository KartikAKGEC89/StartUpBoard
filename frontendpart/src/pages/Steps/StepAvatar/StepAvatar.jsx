import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import styles from './StepAvatar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import profile from '../../../images/nobita.png'
import {setAvatar} from '../../../store/activateSlice'

const StepAvatar = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate)
  const [profilepic, setProfilePic] = React.useState(profile);
  const dispatch = useDispatch();

    function captureImage(event) {
      // console.log('captureImage function called');
      if (event.target.files.length > 0) {
      // console.log('File selected:', event.target.files[0]);
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = function () {
        // console.log('File read completed');
        // console.log('File content:', reader.result);
        setProfilePic(reader.result);
        const action = setAvatar(reader.result);
        // console.log('Dispatching action:', action);
        dispatch(action);
      }

      reader.onerror = function (error) {
        console.error('Error reading file:', error);
      }
    } else {
      console.error('No files selected');
    }
  }
  
  return (
    <div className={styles.cardwrapper}>
     <Card tittle={`Okay, ${name} !`}>
      <p className={styles.paragraph}>
        How's the photo ?
      </p>
      <div className={styles.avatarWrapper}>
          <img className={ styles.avtar} src={profilepic} alt='profilepic' /> 
      </div>
      <div>
          <input onChange={captureImage} id="avatarInput" type='file' className={styles.avatarInput} />
          <label htmlFor='avatarInput' className={styles.avatarLabel}>
            Choose a different photo
          </label>
      </div>
      <div className={styles.buttonwrapper}>
        <Button text="Next"></Button>
      </div>
     </Card>
    </div>
  )
}

export default StepAvatar
