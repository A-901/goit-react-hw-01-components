import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';



const Profile = ({ name , tag , location , avatar , stats }) => (
  
  <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src= {avatar}
      alt="user avatar"
      className={styles.avatar}
      
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>  
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{stats.likes}</span>
    </li>    
  </ul>
</div>
);

Profile.defaultProps = {
  name: "Petra Marica",
  tag: "@pmarica",
  location: "Salvador, Brasil",
  avatar: "https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg",
  stats:{
    "followers": 1000,
    "views": 2000,
    "likes": 3000
  }
};

Profile.propTypes = {  
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};


export default Profile;