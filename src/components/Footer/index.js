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
              <li class="footerItem">
                <Link>
                  <a
                    href="https://g.page/r/CWET2z70IjwHEAI/review"
                    class="nav-link active"
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
            <b>First Class Paint LLC</b>
          </h1>
          <br />
          <div className="copyright">
            <p>© 2023 First Class Paint LLC. All rights reserved.</p>
          </div>
        </section>
        <section>
          <h1>Contact</h1>
          <ul>
            <li class="footerItem">
              <Link>
                <a href="tel:9107463360" class="nav-link active">
                  +1 (910) 746-3360
                </a>
              </Link>
            </li>
            <li class="footerItem">
              <Link>
                <a
                  href="mailto:andrewsa@firstclasspaintingllc.org"
                  class="nav-link active"
                >
                  andrewsa@firstclasspaintingllc.org
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
