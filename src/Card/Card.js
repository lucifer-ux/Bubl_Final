import { React, useState } from "react";
import "./styles.css";
import one from "../images/cardImage1.svg"
import two from "../images/cardImage2.svg"
import three from "../images/cardImage3.svg"
import coin1 from "../images/coins/BHC.svg"
import coin2 from "../images/coins/BNB.svg"
import coin3 from "../images/coins/USDT.svg"
const Card = () => {
  const [hovered1, setHovered1] = useState(false);
  const toggleHover1 = () => setHovered1(!hovered1);

  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);

  const [hovered3, setHovered3] = useState(false);
  const toggleHover3 = () => setHovered3(!hovered3);

  return (
    <div className="wrapping-content">
      <h1 className="header-crypto">Invest in curated portfolios</h1>

      <div class="wrapper">
        <div className="col_third">
          <div
            className={hovered1 ? "hover panel flip" : "hover panel"}
            onMouseEnter={toggleHover1}
            onMouseLeave={toggleHover1}
          >
            <div className="front">
              <div className="box1">
				  <img src={one}/>
                <h1>Metaverse</h1>
                <h2 className="para">+1,050.45%</h2>
              </div>
            </div>
            <div className="back">
              <div className="box2">
              <img src={coin1} alt="" />
                <p>
                  “ Metaverse is all the hype in the market right now and this
                  coin set brings you a curated collection of the top projects
                  at the forefront of building the metaverse. Consisting of 8
                  tokens with equally split weights, the coin set is all about
                  investing in the future.“
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col_third">
          <div
            className={hovered2 ? "hover panel flip" : "hover panel"}
            onMouseEnter={toggleHover2}
            onMouseLeave={toggleHover2}
          >
            <div className="front">
              <div className="box1">
			  <img src={two}/>

                <h1>Blue Chip</h1>
                <h2 className="para">+1,050.45%</h2>
              </div>
            </div>
            <div className="back">
              <div className="box2">
              <img src={coin2} alt="" />
                <p>
                  “ A coin set composed of the most well recognized and reputed
                  crypto tokens, Crypto Blue Chip coin set offers steady,
                  long-term returns and is a safer bet in the market as it
                  combines high market cap tokens, which are less prone to
                  volatility and have a proven track record “
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col_third end">
          <div
            className={hovered3 ? "hover panel flip" : "hover panel"}
            onMouseEnter={toggleHover3}
            onMouseLeave={toggleHover3}
          >
            <div className="front">
              <div className="box1">
			<img src={three}/>
                <h1>DeFi 10</h1>
                <h2 className="para">+1,050.45%</h2>
              </div>
            </div>
            <div className="back">
              <div className="box2">
              <img src={coin3} alt="" />

                <p>
                  “ DeFi or Decentralized Finance is finance based on blockchain
                  technology and utilizes smart contracts, removing dependency
                  from central financial intermediaries. DeFi has grown
                  multifold in the previous years and continues to show
                  promising growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
