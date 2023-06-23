import * as React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/images/LogoImg.png";
import "./index.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <section className="desktop">
          <section className="resources">
            <h1>Resources</h1>
            <ul>
              <ul className="footerList">
                <li className="footerItem">
                  <Link
                    className="category"
                    to="services"
                    offset={-100}
                    duration={500}
                  >
                    <a href="services" className="nav-link active">
                      Services
                    </a>
                  </Link>
                </li>
                <li className="footerItem">
                  <Link
                    className="category"
                    to="work"
                    offset={-100}
                    duration={500}
                  >
                    <a href="work" className="nav-link active">
                      Our Work
                    </a>
                  </Link>
                </li>
                <li className="footerItem">
                  <Link
                    className="category"
                    to="contact"
                    offset={-100}
                    duration={500}
                  >
                    <a href="contact" className="nav-link active">
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li className="footerItem">
                  <Link
                    className="blank"
                    to="footer"
                    offset={-100}
                    duration={500}
                  >
                    <a
                      href="https://g.page/r/CWET2z70IjwHEAI/review"
                      className="nav-link active"
                    >
                      Give a review
                    </a>
                  </Link>
                </li>
              </ul>
            </ul>
          </section>
          <section className="main">
            <h1>
              <b>First Class Painting LLC</b>
            </h1>
            <img className="logo" src={Logo} />{" "}
            <div className="copyright">
              <p>© 2023 First Class Painting LLC. All rights reserved.</p>
            </div>
          </section>
          <section className="footerContact">
            <h1>Contact</h1>
            <ul>
              <li className="footerItem">
                <Link
                  className="blank"
                  to="footer"
                  offset={-100}
                  duration={500}
                >
                  <a href="tel:9107463360" className="nav-link active">
                    +1 (910) 746-3360
                  </a>
                </Link>
              </li>
              <li className="footerItem">
                <Link
                  className="blank"
                  to="footer"
                  offset={-100}
                  duration={500}
                >
                  <a
                    href="mailto:andrewsa@firstclasspaintingllc.org"
                    className="nav-link active"
                  >
                    andrewsa@firstclasspaintingllc.org
                  </a>
                </Link>
              </li>
            </ul>
          </section>
        </section>

        <section className="mobile">
          <section className="resources">
            <h1>
              <b>First Class Painting LLC</b>
            </h1>
            <h1>Resources</h1>
            <ul>
              <ul className="footerList">
                <li className="footerItem">
                  <Link
                    className="category"
                    to="services"
                    offset={-100}
                    duration={500}
                  >
                    <a href="services" className="nav-link active">
                      Services
                    </a>
                  </Link>
                </li>
                <li className="footerItem">
                  <Link
                    className="category"
                    to="experience"
                    offset={-100}
                    duration={500}
                  >
                    <a href="experience" className="nav-link active">
                      Our Work
                    </a>
                  </Link>
                </li>
                <li className="footerItem">
                  <Link
                    className="category"
                    to="contact"
                    offset={-100}
                    duration={500}
                  >
                    <a href="contact" className="nav-link active">
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li className="footerItem">
                  <Link
                    className="blank"
                    to="footer"
                    offset={-100}
                    duration={500}
                  >
                    <a
                      href="https://g.page/r/CWET2z70IjwHEAI/review"
                      className="nav-link active"
                    >
                      Give a review
                    </a>
                  </Link>
                </li>
              </ul>
            </ul>
          </section>
          <section className="main"></section>
          <section>
            <h1>Contact</h1>
            <ul>
              <li className="footerItem">
                <Link
                  className="blank"
                  to="footer"
                  offset={-100}
                  duration={500}
                >
                  <a href="tel:9107463360" className="nav-link active">
                    +1 (910) 746-3360
                  </a>
                </Link>
              </li>
              <li className="footerItem">
                <Link
                  className="blank"
                  to="footer"
                  offset={-100}
                  duration={500}
                >
                  <a
                    href="mailto:andrewsa@firstclasspaintingllc.org"
                    className="nav-link active"
                  >
                    andrewsa@firstclasspaintingllc.org
                  </a>
                </Link>
              </li>
            </ul>
          </section>
          <br />
          <div className="copyright">
            <p>© 2023 First Class Painting LLC. All rights reserved.</p>
          </div>
        </section>
      </footer>
    );
  }
}
