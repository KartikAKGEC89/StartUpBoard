import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import styles from './StepAvatar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import profile from '../../../images/nobita.png'
import { setAvatar } from '../../../store/activateSlice'
import { activate } from '../../../Api'
import { setAuth } from '../../../store/authSlice';
import Loader from '../../../components/shared/Loader/Loader'

const StepAvatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate)
  const [profilepic, setProfilePic] = React.useState(profile);
  const [loading, setLoading] = React.useState(false);

  function captureImage(event) {
     
      if (event.target.files.length > 0) {
    
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = function () {
     
        setProfilePic(reader.result);
        const action = setAvatar(reader.result);
      
        dispatch(action);
      }

      reader.onerror = function (error) {
        console.error('Error reading file:', error);
      }
    } else {
      console.error('No files selected');
    }
  }

  async function submit() {
    setLoading(true);
    try {
      const { data } = await activate({ name, avatar });

      if (data.auth) {
        console.log(data.auth)
        const action = setAuth({ user: data.message });
        dispatch(action)
      }
      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if(loading) return <Loader message = "Activation in progress........ "/>
  
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
        <Button text="Next" onClick={submit}></Button>
      </div>
     </Card>
    </div>
  )
}

export default StepAvatar
