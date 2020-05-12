import React from 'react';
import Profile from './Profile';
import user from './user.json';
import Statistics from './Statistics';
import staticData from './statistical-data.json';
import FriendList from './FriendList';
import FriendListItem from './FriendListItem';
import frendImport from './friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';


const App = () => (
  <div className = 'fff'>    
     <Profile  
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}                 
     /> 
     <Statistics
        stats={staticData}
        title= 'Upload stats'
     />
     <FriendList 
      friends={frendImport}
     >
        <FriendListItem/>
     </FriendList>
     <TransactionHistory
      items= {transactions}
     />
  </div>
  
  
  
  
);

export default App; 