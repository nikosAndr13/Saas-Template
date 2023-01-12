import React from "react";
import styles from "./AppIcons.module.css";

const AppIcons = ({icons}) => {
  const [intercom, treehouse, zapier, marvel, notion, shazam] = icons;
  const images = [
    {name: 'intercom', src: intercom},
    {name: 'treehouse', src: treehouse},
    {name: 'zapier', src: zapier },
    {name: 'marvel', src: marvel},
    {name: 'notion', src: notion},
    {name: 'shazam', src: shazam},
  ];
  return (
    <>
      <section className={`${styles.AppIcons}`}>
        <div className={`${styles.rating}`}>Trusted by over 100+ business worldwide!</div>
        {images.map(image => (
          <React.Fragment key={image.name}>
            <img src={image.src} alt={image.name} className={`${styles.images}`}/>
          </React.Fragment>
        ))}
      </section>
    </>
  )
}
export default AppIcons;