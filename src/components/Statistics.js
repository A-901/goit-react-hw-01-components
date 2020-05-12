import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"

function color()
{
    const color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
};

const Statistics = ({title, stats}) => (
<section className={styles.statistics}>
  {title !== undefined && (
    <h2>{title} </h2>
  ) 
}  
  <ul className={styles.statList}>
    {
     stats.map(stat => (
       <li key = {stat.id} className={styles.item} style={{ backgroundColor: color() }} >
         <span >{stat.label} </span> 
         <span>{stat.percentage}%</span>
       </li>
     )) 
    }
  </ul>
</section>
);

Statistics.propTypes = {  
  title: PropTypes.string,
  stats: PropTypes.array.isRequired  
};

export default Statistics;