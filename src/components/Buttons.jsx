import React from 'react';

const Buttons = (props) => {

  return (
    <div className="Buttons">
      <button onClick={props.struedel}>-</button>
      <button onClick={props.kuchen}>+</button>
    </div>
  )
}

export default Buttons;