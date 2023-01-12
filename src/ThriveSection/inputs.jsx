import React from "react";
import styles from './inputs.module.css';

const Input = ({value, name, onChange, img}) => {
  return (
    <React.Fragment>
      <div className={`${styles.inputsWrapper}`} key={name}>
        {img}
        <input type='text' value={value} name={name} onChange={onChange} placeholder={name}/>
      </div>
    </React.Fragment>
  )
}

export default Input