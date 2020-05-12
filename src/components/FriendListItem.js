import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


const FriendListItem = ({avatar, name, isOnline, key}) => (
  <>
  {
    isOnline === true ? (
    <li key={key} className={styles.online}>
      <span className={styles.green}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
    ) : (
    <li key={key} className={styles.offline}>
      <span className={styles.red}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}></p>
    </li>
    )
  } 
  </>  
);

FriendListItem.propTypes = {  
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
};

export default FriendListItem;