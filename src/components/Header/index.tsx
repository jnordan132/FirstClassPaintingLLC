import * as React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/images/LogoImgMain.png";
import "./index.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                {/* <h1>First Class Painting LLC</h1>÷ */}
                <img src={Logo} style={{width:"350px"}}></img>
                <button
                  className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                  type="button"
                  data-bs-toggle="collapse"
                  aria-controls="navbarNav"
                  data-bs-target="#navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon top-bar"></span>
                  <span className="toggler-icon middle-bar"></span>
                  <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
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
                    <li className="nav-item">
                      <Link
                        className="category"
                        to="work"
                        offset={-100}
                        duration={500}
                      >
                        <a href="work" className="nav-link active">
                          Work
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="category"
                        to="contact"
                        offset={-100}
                        duration={500}
                      >
                        <a href="contact" className="nav-link active">
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
