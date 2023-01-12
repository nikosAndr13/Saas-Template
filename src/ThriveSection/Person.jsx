import React from "react";
import styles from '../ThriveSection/ThriveSection.module.css'

const Person = ({twistStar, GreySuitMan, goldTwist, Diagram}) => (
  <>
   <div className={`${styles.square}`}>
    {twistStar}
    {GreySuitMan}
    {goldTwist}
    {Diagram}
   </div>
  </>
)

export default Person;