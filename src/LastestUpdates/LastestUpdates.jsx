import React from "react";
import styles from './lastestUpdates.module.css';

const LatestUpdates = ({array}) => (
  <React.Fragment>
    <div className={`${styles.title}`}>
      <h1>
        Our latest updates for you here!
      </h1>
      <h5>What's New</h5>
    </div>
    <div className={`${styles.updatesWrapper}`}>
      {array.map(update => (
        <div key={update.header} >
          {update.img}
          <h3>{update.text}</h3>
          <h2>{update.header}</h2>
          <div className={`${styles.arrow}`}>{update.button}</div>
        </div>
      ))}
    </div>
  </React.Fragment>
)

export default LatestUpdates;