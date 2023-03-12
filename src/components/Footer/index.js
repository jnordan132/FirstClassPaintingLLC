import React from "react";
import { Link } from "react-scroll";
import "./index.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <section className="contact">
          <h1>Resources</h1>
          <ul>
            <ul class="footerList">
              <li class="footerItem">
                <Link
                  class="category"
                  to="services"
                  offset={-100}
                  duration={500}
                >
                  <a href="services" class="nav-link active">
                    Services
                  </a>
                </Link>
              </li>
              <li class="footerItem">
                <Link
                  class="category"
                  to="experience"
                  offset={-100}
                  duration={500}
                >
                  <a href="experience" class="nav-link active">
                    Our Work
                  </a>
                </Link>
              </li>
              <li class="footerItem">
                <Link
                  class="category"
                  to="experience"
                  offset={-100}
                  duration={500}
                >
                  <a href="experience" class="nav-link active">
                    About Us
                  </a>
                </Link>
              </li>
            </ul>
            <li>
              <a href="https://g.page/r/CWET2z70IjwHEAI/review">
                Leave a review
              </a>
            </li>
          </ul>
          {/* <h1>Contact</h1>
          <ul>
            <li>
              <a href="tel:9107463360">+1 (910) 746-3360</a>
            </li>
            <li>
              <a href="mailto:andrewsa@firstclasspaintingllc.org">
                andrewsa@firstclasspaintingllc.org
              </a>
            </li>
          </ul> */}
        </section>
        <section className="main">
          <h1>First Class Paint LLC</h1>
          <br />
          <div className="copyright">
            <p>© 2023 First Class Paint LLC. All rights reserved.</p>
          </div>
        </section>
        <section>
          <h1>Contact</h1>
          <ul>
            <li>
              <a href="tel:9107463360">+1 (910) 746-3360</a>
            </li>
            <li>
              <a href="mailto:andrewsa@firstclasspaintingllc.org">
                andrewsa@firstclasspaintingllc.org
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
