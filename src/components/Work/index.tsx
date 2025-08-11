import * as React from "react";
import "./index.css";

import beforeSide from "../../assets/images/BeforeSide.jpg";
import afterSide from "../../assets/images/AfterSide.jpg";
import beforeSink from "../../assets/images/BeforeSink.jpg";
import afterSink from "../../assets/images/AfterSink.jpg";
import extHouse from "../../assets/images/ExteriorRes.jpg";
import extHouseBack from "../../assets/images/ExtResBack.jpg";
import pergola from "../../assets/images/Pergola.jpg";
import deck from "../../assets/images/Deck.jpg";
import ant1 from "../../assets/images/ant1.webp";
import ant2 from "../../assets/images/ant2.webp";
import ant3 from "../../assets/images/ant3.webp";
import ant4 from "../../assets/images/ant4.webp";
import ant5 from "../../assets/images/ant5.webp";
import ant6 from "../../assets/images/ant6.webp";
import ant7 from "../../assets/images/ant7.webp";
import ant8 from "../../assets/images/ant8.webp";

export default class Work extends React.Component {
  render() {
    return (
      <section className="work">
        <h2>Some of Our Work!</h2>
        <div className="gallery" id="desktop">
          <div className="group">
            <img src={beforeSide} alt="before kitchen cabinets"></img>
            <img src={afterSide} alt="after kitchen cabinets"></img>
            <img src={beforeSink} alt="before kitchen sink"></img>
            <img src={afterSink} alt="after kitchen sink"></img>
          </div>
          <div className="group">
            <img src={ant1} alt="before kitchen cabinets"></img>
            <img src={ant2} alt="after kitchen cabinets"></img>
            <img src={ant8} alt="before kitchen sink"></img>
            <img src={ant4} alt="after kitchen sink"></img>
          </div>
          <div className="group">
            <img src={extHouse} alt="Exterior of house painted"></img>
            <img src={extHouseBack} alt="Exterior of backyard"></img>
            <img src={pergola} alt="pergola"></img>
            <img src={deck} alt="freshly stained deck"></img>
          </div>
          <div className="group">
            <img src={ant5} alt="before kitchen cabinets"></img>
            <img src={ant6} alt="after kitchen cabinets"></img>
            <img src={ant7} alt="before kitchen sink"></img>
            <img src={ant3} alt="after kitchen sink"></img>
          </div>
        </div>
        <div className="gallery" id="mobile">
          <div className="group">
            <img src={beforeSide} alt="before kitchen cabinets"></img>
            <img src={ant1} alt="before kitchen cabinets"></img>
            <img src={beforeSink} alt="before kitchen sink"></img>
            <img src={ant8} alt="before kitchen sink"></img>
          </div>
          <div className="group">
            <img src={afterSide} alt="after kitchen cabinets"></img>
            <img src={ant2} alt="after kitchen cabinets"></img>
            <img src={afterSink} alt="after kitchen sink"></img>
            <img src={ant4} alt="after kitchen sink"></img>
          </div>
          <div className="group">
            <img src={extHouse} alt="Exterior of house painted"></img>
            <img src={ant5} alt="before kitchen cabinets"></img>
            <img src={pergola} alt="pergola"></img>
            <img src={ant7} alt="before kitchen sink"></img>
          </div>
          <div className="group">
            <img src={extHouseBack} alt="Exterior of backyard"></img>
            <img src={ant6} alt="after kitchen cabinets"></img>
            <img src={deck} alt="freshly stained deck"></img>
            <img src={ant3} alt="after kitchen sink"></img>
          </div>
        </div>
      </section>
    );
  }
}
