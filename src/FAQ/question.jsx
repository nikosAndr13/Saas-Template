import React, { useEffect } from "react";
import faq from "./FAQ.module.css";

const Question = ({toggleDropDown, isOpen, id}) => {
  const mountedStyle = {
    animation: `${faq.inAnimation} .3s ease-in`,
  };
  const unmountedStyle = {
    animation: `${faq.outAnimation} .3s ease`,
  };

  useEffect(() => {
    if (isOpen.isOpen === '') {
      }
    } 
  ,[isOpen.isOpen])
  

  return (
  <>
    <div onClick={() => {
        toggleDropDown(id)
    }} className={`${faq.questionTitleWrap}`}>
      <div>
        What is the best way to grow a Saas business today?
      </div>
      <div className={`${faq.minus}`}>-</div>
    </div>
    {(isOpen.isOpen === id) 
    ? (<div 
        className={`${faq.animation}`}
        style={(isOpen.isOpen ? mountedStyle : unmountedStyle)}
        >
      Launch a business today with our help and get it done with
      amazing launch features, websites and more with uifry. 
      We help business like yours thrive every day and beyond.
      <br/>
      Launch a business today with our help and get it done with amazing launch 
      features, websites and more with uifry. 
      We help business like yours thrive every day and beyond. 
      </div>) : ''}
  </>
)
}

export default Question;