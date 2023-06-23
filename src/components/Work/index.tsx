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

export default class Work extends React.Component {
  render() {
    return (
      <section className="work">
        <h1>Some of Our Work!</h1>
        <div className="gallery">
          <div className="group">
            <img src={beforeSide} alt="before kitchen cabinets"></img>
            <img src={afterSide} alt="after kitchen cabinets"></img>
            <img src={beforeSink} alt="before kitchen sink"></img>
            <img src={afterSink} alt="after kitchen sink"></img>
          </div>
          <div className="group">
            <img src={extHouse} alt="Exterior of house painted"></img>
            <img src={extHouseBack} alt="Exterior of backyard"></img>
            <img src={pergola} alt="pergola"></img>
            <img src={deck} alt="freshly stained deck"></img>
          </div>
        </div>
      </section>
    );
  }
}
