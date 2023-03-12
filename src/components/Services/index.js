import React from "react";
import "./index.css";

class Services extends React.Component {
  render() {
    return (
      <section className="services">
        <h2 className="servicesTitle">
          <span>Our Services</span>
        </h2>
        <br />
        <ul className="servicesList">
          <li className="servicesItem">
            <h3>6 To be Decided...</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </p>
          </li>
          <li className="servicesItem">
            <h3>Residential</h3>
            <p>
              If you, or someone you know wants to tackle a project with some
              help from us, We offer a variety of residential services,
              including but not limited to interior and exterior painting.
            </p>
          </li>
          <li className="servicesItem">
            <h3>3 To be Decided...</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </p>
          </li>
          <li className="servicesItem whyUs">
            <h3>Why Hire Us?</h3>
            <ul>
              <p>
                <li>Fully Licensed & Insured</li>
                <li>
                  We have 15+ years of experience painting residential &
                  commercial properties
                </li>
                <li>
                  Flat rates, so you know exactly how much you're paying before
                  we begin
                </li>
                <li>
                  We Accept most forms of payment - Cash/Debit/Credit/Online
                  Transfer
                </li>
                <li>We ensure that the end result is exactly what is wanted</li>
              </p>
            </ul>
          </li>
          <li className="servicesItem">
            <h3>5 To be Decided...</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </p>
          </li>
          <li className="servicesItem">
            <h3>Commercial</h3>
            <p>
              Do you own or operate a business and want to renovate your work
              environment? We offer a variety of commercial services including
              interior and exterior painting.
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Services;
