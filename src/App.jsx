import './App.css'
import React, {useState} from 'react'
import Navbar from './NavBar/navbar'
import Header from './Header/Header'
import AppIcons from './AppIcons/AppIcons';
import ThriveSection from './ThriveSection/ThriveSection';
import intercom from './assets/intercom.svg';
import treehouse from './assets/treehouse.svg';
import zapier from './assets/zapier.svg';
import marvel from './assets/marvel.svg';
import notion from './assets/notion.svg';
import shazam from './assets/shazam.svg';
import check from './assets/check.svg';
import rightArrow from './assets/rightArrow.svg';
import contact from './assets/contact.svg';
import mail from './assets/mail.svg';
import business1 from './assets/business1.svg'
import business2 from './assets/business2.svg';
import business3 from './assets/business3.svg';
import insta from './assets/insta.svg';
import flickr from './assets/flickr.svg';
import pinterest from './assets/pinterest.svg';
import twitter from './assets/twitter.svg';

import GreySuitMan from './assets/GreySuitMan.svg';
import twistStar from './assets/twistStar.svg';
import goldTwist from './assets/goldTwist.svg';
import Diagram from './assets/Diagram.svg';
import logo from './assets/logo.svg';
import Diagram2 from './assets/Diagram2.svg';
import Diagram3 from './assets/Diagram3.svg';
import woman2 from './assets/woman2.svg';
import Man2 from './assets/Man2.svg';
import FeatureList from './FeatureList/FeatureList';
import Person from './ThriveSection/Person';
import personStyle from './ThriveSection/ThriveSection.module.css';
import ContactSubSection from './ThriveSection/ContactSubSection';
import Input from './ThriveSection/inputs';
import style from './Header/header.module.css';
import button from './NavBar/navBar.module.css';
import ContactButton from './ContactButton';
import Form from './ThriveSection/form';
import LatestUpdates from './LastestUpdates/LastestUpdates';
import FAQ from './FAQ/FAQ';



function App() {
  const [values, handleValue] = useState({
    'Full Name': '',
    Email:'',
  });


  const trackState = (event) => {
    const {name, value} = event.target;
    handleValue({...values, [name]: value,
})
}

  const [isOpen, setIsOpen] = useState({isOpen: ''})

  const toggleDropDown = (name) => {
      (name === isOpen.isOpen) 
      ? setIsOpen({ isOpen: '' })
      : setIsOpen({ isOpen: name})
  }

const icons = [intercom, treehouse, zapier, marvel, notion, shazam]

  const contactInfo = [
    {
    style:{display:'flex', alignItems:'center', gap:'20px'}, 
    img: <img src={check} alt='check'/>,
    styles: `${style.squareButton} ${style.starColor}`,
    text: 'Super useful and easy to use interface',
    key:1,
    },
    {
    style:{display:'flex', alignItems:'center', gap:'20px'}, 
    img: <img src={check} alt='check'/>,
    styles: `${style.squareButton} ${style.starColor}`,
    text: 'Easiest way to grow your business in days',
    key:2,
    },
  ]

  const updates = [
    {img: <img src={business1} alt='business1'/>,
     text:'Growth', 
     header:'15 ways to grow your saas in 21 days' , 
     button:  <ContactButton
              styles={`${style.squareButton}`}
              text={<img src={rightArrow} alt="rightArrow"/>}
              />
    },
    {img: <img src={business2} alt='business2'/>,
     text:'Career',
     header:'Why everyone is moving today to subscriptions',
     button: <ContactButton
              styles={`${style.squareButton}`}
              text={<img src={rightArrow} alt="rightArrow"/>}
              />,
  },
    {img: <img src={business3} alt='business3'/>,
     text:'Design',
     header:'9 ways to make it quick and never look back again', 
     button: <ContactButton
              styles={`${style.squareButton}`}
              text={<img src={rightArrow} alt="rightArrow"/>}
              />,
  },
  ]

  

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AppIcons
        icons={icons}
      />
      <ThriveSection
        Image={
          <Person
            twistStar={<img src={twistStar} alt='twistStar' className={`${personStyle.star}`}/>}
            GreySuitMan={<img src={GreySuitMan} alt='Man In Suit' className={`${personStyle.Man}`}/>}
            goldTwist={<img src={goldTwist} alt='goldTwist' className={`${personStyle.goldTwist}`}/>}
            Diagram={<img src={Diagram} alt='Diagram' className={`${personStyle.Diagram}`}/>}
          />
        }
        row={personStyle.thriveWrapper}
        Contact={
          <ContactSubSection
          style={{display:'flex', gap:'10px', flexDirection:'column'}}
           contactInfo={contactInfo}
          />
        }
      />
      <FeatureList

      />
      <ThriveSection
        Image={
          <Person
            twistStar={<img src={logo} alt='logo' className={`${personStyle.logo}`}/>}
            GreySuitMan={<img src={woman2} alt='woman2' className={`${personStyle.woman}`}/>}
            goldTwist={<img src={goldTwist} alt='goldTwist' className={`${personStyle.goldTwist2}`}/>}
            Diagram={<img src={Diagram2} alt='Diagram' className={`${personStyle.Diagram2}`}/>}
          />}
        row={personStyle.reverseThriveWrapper}
        Contact={
          <Form 
            field1={<Input
              value={values['Email']}
              name={'Email'}
              onChange={trackState}
              img={<img src={contact} alt='contact'/>}
              key={'email'}
            />}
            field2={<Input
              value={values['Full Name']}
              name={'Full Name'}
              onChange={trackState}
              img={<img src={mail} alt='mail'/>}
              key={'name'}
            />}
            submit={
              <ContactButton
                text={'Contact Now'}
                styles={`${button.ContactButton} ${personStyle.ContactButton}`}
                name='submit'
              />}
          />
        }
      />
      <LatestUpdates array={updates}/>
      <ThriveSection
        Image={
          <Person 
           twistStar={<img src={twistStar} alt='twistStar' className={`${personStyle.star}`}/>}
           GreySuitMan={<img src={Man2} alt='Man In Suit' className={`${personStyle.Man}`}/>}
           goldTwist={<img src={goldTwist} alt='goldTwist' className={`${personStyle.goldTwist}`}/>}
           Diagram={<img src={Diagram3} alt='Diagram' className={`${personStyle.Diagram3}`}/>}
        />}
        row={personStyle.reverseThriveWrapper}
        Contact={
          <div className={`${style.ContactSubSection}`}>
          <ContactButton 
            styles={`${button.ContactButton}`}
            text={'Contact Now'}
            />
          <ContactButton
            styles={`${style.squareButton}`}
            text={<img src={rightArrow} alt="rightArrow"/>}
          />
          <div className={`${style.headerTitle} ${style.Demo}`}>Book a Demo Today</div>
        </div>
          
        }
      />
      <FeatureList/>
      <FAQ
        logo={<img src={logo} alt='logo'/>}
        title={<h3>Frequently Asked Questions</h3>}
        isOpen={isOpen}
        toggleDropDown={toggleDropDown}
      />
      <footer style={{display:'flex', flexDirection:'column', gap:'30px'}}>
      <hr/>
        <Navbar/>
        <div style={{display:'flex', justifyContent: 'space-between', fontFamily: 'Plus Jakarta Sans', flexWrap:'wrap'}}>
        <div>All rights reserved uifry.com | Terms and conditions apply!</div>
        <div style={{display:'flex', gap:'10px'}}>
          <img src={insta} alt="instagram" />
          <img src={flickr} alt="flickr" />
          <img src={pinterest} alt="pinterest" />
          <img src={twitter} alt="twitter" />
        </div>
        </div>
      </footer>

    </div>
  )
}

export default App
