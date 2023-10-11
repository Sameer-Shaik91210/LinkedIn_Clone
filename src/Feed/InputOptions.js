import React from 'react';
import './InputOptions.css';
function InputOpitons({Icon,title,color}) {
  return (
  <div className="input_options">
    <Icon style={{color:color}} />
    <h4>{title}</h4>

  </div>
    )
}

export default InputOpitons