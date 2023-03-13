import React from "react";
import { Link } from "react-scroll";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="nav">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <h1>First Class Paint LLC</h1>
                <button
                  class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                  type="button"
                  data-bs-toggle="collapse"
                  aria-controls="navbarNav"
                  data-bs-target="#navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon top-bar"></span>
                  <span class="toggler-icon middle-bar"></span>
                  <span class="toggler-icon bottom-bar"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
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
                    <li class="nav-item">
                      <Link
                        class="category"
                        to="work"
                        offset={-100}
                        duration={500}
                      >
                        <a href="work" class="nav-link active">
                          Work
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="category"
                        to="contact"
                        offset={-100}
                        duration={500}
                      >
                        <a href="contact" class="nav-link active">
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

export default Header;
