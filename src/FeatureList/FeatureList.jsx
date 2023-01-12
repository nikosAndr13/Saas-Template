import React from "react";
import ContactButton from "../ContactButton";
import check from "../assets/check.svg";
import time from "../assets/time.svg"
import upload from "../assets/upload.svg";
import style from '../Header/header.module.css';
import styles from './FeatureList.module.css';

const FeatureList = () => {
  const features = [
    {src: <ContactButton
            text={<img src={check} alt='check'/>}
            styles={`${style.squareButton} ${styles.check}`}
          />, text:'Super useful and easy to use, with 100+ customizations'},
    {src: <ContactButton
            text={<img src={time} alt='time'/>} 
            styles={`${style.squareButton} ${styles.time}`}
          />, text:'Super useful and easy for use, with 100+ customizations'},
    {src: <ContactButton
            text={<img src={upload} alt='uplaod'/>} 
            styles={`${style.squareButton} ${styles.upload}`}
          />, text:'Perfect UI/UX experience, with 100+ customizations'},
  ]

  return (
    <>
      <section className={`${styles.featureWrap}`}>
        {features.map(feature => (
          <div key={feature.text} className={`${styles.itemsWrap}`}>
            {feature.src}
            {feature.text}
          </div>
        ))}
      </section>
    </>
  )
}

export default FeatureList;