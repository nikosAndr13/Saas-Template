import React from "react";
import styles from './navBar.module.css'
import vector from "../assets/vector.png"

const Logo = () => (
  <>
   <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
    <div className={`${styles.logoWrapper}`}>
      <div className={`${styles.dot}`}></div>
    </div>
      <h2>uifry<small>&#8482;</small></h2>
    </div>
  </>
)

export default Logo;