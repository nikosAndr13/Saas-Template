import React from "react";
import styles from '../ThriveSection/ThriveSection.module.css';
import ContactButton from "../ContactButton";

const ThriveSection = ({Image, row, Contact, }) => {
  return (
    <>
      <section className={row}>
        {Image}
      <div className={`${styles.thriveSubSection}`}>
        <div className={`${styles.thriveTitle}`}>Let your business thrive under our supervision</div>
        <div>Launch a business today with our help and get it done with
          amazing launch features, websites and more with uifry. We help businesses
          like yours thrive every day and beyond.
        </div>
        <div>We are making every business grow!</div>
        {Contact}
      </div>
      </section>
    </>
  )
}

export default ThriveSection;