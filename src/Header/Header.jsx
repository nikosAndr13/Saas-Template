import React from "react";
import ContactButton from "../ContactButton";
import rightArrow from '../assets/rightArrow.svg';
import Woman from '../assets/Woman.svg';
import twistyArrow from '../assets/twistyArrow.svg';
import Diagram from '../assets/Diagram.svg';
import star from '../assets/star.svg';
import styles from './header.module.css';
import style from '../NavBar/navBar.module.css'

const Header = () => (
  <div className={`${styles.headerWrapper}`}>
    <section>
      <div className={`${styles.headerTitle}`}>
        Launch a software business website today with us! 
      </div>
      <div className={`${styles.headerTitle} ${styles.headersubText}`}> 
        Launch a business today with our help and get it done
        with amazing launch features, websites and more with uifry.
        We help businesses like yours thrive every day and beyond.
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
      <div className={`${styles.ContactSubSection}`}>
        <ContactButton
          styles={`${styles.squareButton} ${styles.starColor}`}
          text={<img src={star} alt='star'/>}
        />
        <div className={`${styles.headerTitle} ${styles.Demo}`}>Rated 4.9 out of 1200 reviews</div>
      </div>
    </section>
    <section className={`${styles.square}`}>
      <div>
        <img src={Diagram} alt='diagram' className={`${styles.Diagram}`}/>
        <img src={Woman} alt='woman' className={`${styles.Woman}`}/>
        <img src={twistyArrow} alt='swing' className={`${styles.twistyArrow}`}/>
      </div>
    </section>
  </div>
)

export default Header;