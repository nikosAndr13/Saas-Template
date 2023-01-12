import React from "react";
import styles from './navBar.module.css'
import Logo from './logo'
import ContactButton from "../ContactButton";

const NavBar = () => {
  const navLinks = [
    'Home', 'About', 'Pricing', 'Blog'
  ]
  return (
  <div className={`${styles.navWrapper}`}>
    <div className={`${styles.navLogoLinksWrapper}`}>
      <Logo/>
      <nav className={`${styles.navBar}`}>
        {navLinks.map(link => (
          <div key={link}>
            {link}
          </div>
        ) )}
      </nav>
    </div>
    <ContactButton
      text={'Contact Now'}
      styles={styles.ContactButton}
    />
  </div>
  )
};

export default NavBar;