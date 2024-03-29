import * as React from "react";
import "./index.css";

export default class Services extends React.Component {
  render() {
    return (
      <section className="services">
        <h2 className="servicesTitle">
          <span>Services</span>
        </h2>
        <br />
        <ul className="servicesList">
          <li className="servicesItem">
            <h3>Residential</h3>
            <p>
              Do you or someone you know want to tackle a project with some
              help? We offer a variety of residential services, including but
              not limited to interior and exterior painting. Please fill in the
              contact details below.
            </p>
          </li>
          <li className="servicesItem">
            <h3>Commercial</h3>
            <p>
              Do you own or operate a business and want to renovate your work
              environment? We offer a variety of commercial services, including
              but not limited to interior and exterior painting. Please fill in
              the contact details below.
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
                <li>We ensure that the end result is exactly as agreed</li>
              </p>
            </ul>
          </li>
          <li className="servicesItem">
            <h3>Ask Us!</h3>
            <p>
              We love taking on new projects, big or small. If you have a
              project in mind and need help, ask us! We would love to hear about
              your project and help you out in any way we can! We paint inside
              and out, and have built outdoor structures such as pergolas and
              decks!
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
