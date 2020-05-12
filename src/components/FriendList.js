import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => (     
        <ul className={styles.friendList}> 
        {friends.map((friend) => {
      return (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      );
    })}           
        </ul>   
);

FriendList.propTypes = {  
  friends: PropTypes.array.isRequired   
};

export default FriendList