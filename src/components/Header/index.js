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
                <h2>First Class Paint LLC</h2>
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
                        to="about"
                        offset={-100}
                        duration={500}
                      >
                        <a href="about" class="nav-link active">
                          About
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="category"
                        to="skills"
                        offset={-100}
                        duration={500}
                      >
                        <a href="skills" class="nav-link active">
                          Skills
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="category"
                        to="experience"
                        offset={-100}
                        duration={500}
                      >
                        <a href="experience" class="nav-link active">
                          Experience
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="category"
                        to="experience"
                        offset={-100}
                        duration={500}
                      >
                        <a href="experience" class="nav-link active">
                          Experience
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h4>Call Us Today!</h4>
                  <h3>(910) 746-3360</h3>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
        {/* <h1>First Class Paint LLC</h1>
        <div>
          <h5>Call Us Today!</h5>
          <h4>(910) 746-3360</h4>
        </div> */}
      </header>
    );
  }
}

export default Header;
