import React from 'react';
import './Graph.css';

const Graph = props => {
  return (
    <div style={{width: '300px', height: "50px"}}>
      {props.categories.map(category => {
        return <span key={category.name} style={{width: category.amount + '%', height: "50px", display: 'inline-block'}} className={category.name}/>
      })}
    </div>
  )
};

export default Graph;