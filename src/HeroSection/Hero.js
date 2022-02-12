import React from "react";
import "../styles/styles.css";
import heroImage from '../images/heroImage1.svg'
import TypeAnimation from 'react-type-animation';
import Animation from "./Animation/Animation";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="container-hero">
          <div className="content-hero">
            <div className="left-side">
              <h1>
                Smart
                <br />
                crypto investments
                <br />
                <span>
                <TypeAnimation
        cursor={true}
        sequence={[  'For us',
        3000,
        'For you',
        3000,
        'For Everyone',3000,'']}
        wrapper="span"
       repeat={Infinity}
       />
                </span>
              </h1>
              <p className="content">
                Manage your assets & instantly invest in pre-built portfolios
                and strategies from leading hedge funds and traders.
              </p>
            </div>
            <div className="right-side">
                  <Animation/>
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
