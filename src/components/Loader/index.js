import React from "react";
import "./index.css";

class Loader extends React.Component {
  render() {
    return (
      <section className="loader">
        <div class="container">
          <div class="roller">
            <div class="handle"></div>
          </div>
          <div class="paint"></div>
        </div>
      </section>
    );
  }
}

export default Loader;
