import React from 'react';
import styles from './Room.module.css';
import search from '../../images/search.png';
import person from '../../images/Voice.png';

const Rooms = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.roomheader}>
          <div className={styles.left}>
            <span className={styles.heading}> All Voice Rooms</span>
            <div className={styles.searchBox}>
              <img src={search} alt='search symbol' />
              <input type='text' className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button className={styles.searchperson}>
              <img src={person} alt='search symbol' />
              <span className={styles.head}>Start a room</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rooms
