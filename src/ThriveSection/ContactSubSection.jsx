import React from "react";
import style from '../Header/header.module.css';
import button from '../NavBar/navBar.module.css';
import ContactButton from "../ContactButton";
import rightArrow from '../assets/rightArrow.svg';
import styles from '../ThriveSection/ThriveSection.module.css';



const ContactSubSection = ({contactInfo, width, style}) => {
  return (
    <>
      <div style={style}>
      {contactInfo.map(input => (
        <React.Fragment key={input.key}>
          <div style={{...input.style}}>
            <ContactButton 
              text={input.img}
              styles={input.styles}
              />
            <div>{input.text}</div>
          </div>
        </React.Fragment>
      ))}
      </div>
        <ContactButton
          text={
            <div style={{display: 'flex', alignItems:'center', gap:'20px', justifyContent: 'center'}}>
              Contact Now
              <img src={rightArrow} alt='arrow'/>  
            </div>
            }
          styles={`${button.ContactButton} ${styles.ContactButton}`}
          width={width}
        />
    </>
  )
}

export default ContactSubSection;