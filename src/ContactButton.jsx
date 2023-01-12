import React from "react";

const ContactButton = ({styles, text, width}) => {
  return (
  <>
     <button className={`${styles}`} style={{width: width}}>{text}</button>
  </>
)}

export default ContactButton;