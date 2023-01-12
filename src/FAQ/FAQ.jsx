import React from "react";
import styles from '../Header/header.module.css';
import style from '../NavBar/navBar.module.css';
import ContactButton from "../ContactButton";
import rightArrow from '../assets/rightArrow.svg'
import Question from "./question";
import faq from './FAQ.module.css';

const FAQ = ({logo, title, isOpen, toggleDropDown}) => {

  return (
  <div className={`${style.faq}`}>
    <div className={`${faq.logo}`}>{logo}</div>
    <div className={`${faq.title}`}>{title}</div>
    <div className={`${faq.questionWrapper}`}>
      <Question
        id={'1'} 
        toggleDropDown={toggleDropDown}
        isOpen={isOpen}
      />
      <Question
        id={'2'} 
        toggleDropDown={toggleDropDown}
        isOpen={isOpen}
      />
      <Question
        id={'3'} 
        toggleDropDown={toggleDropDown}
        isOpen={isOpen}
      />
      <Question
        id={'4'} 
        toggleDropDown={toggleDropDown}
        isOpen={isOpen}
      />
    </div>
  
    <div className={`${styles.ContactSubSection}`}>
        <ContactButton 
          styles={`${style.ContactButton}`}
          text={'Contact Now'}
          />
        <ContactButton
          styles={`${styles.squareButton}`}
          text={<img src={rightArrow} alt="rightArrow"/>}
        />
        <div className={`${styles.headerTitle} ${styles.Demo}`}>Book a Demo Today</div>
      </div>
  </div>
 )
}

export default FAQ;