import React from "react";
import "./index.css";

class Contact extends React.Component {
  render() {
    return (
      <section className="contactSection">
        <h1>Contact</h1>
        <div class="contactForm">
          <div class="left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237025.04896892406!2d-77.83621252313384!3d34.21132502727667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9eddad5d07e0f%3A0x4f36d667d1a5cf1b!2sNew%20Hanover%20County%2C%20NC!5e0!3m2!1sen!2sus!4v1678726095917!5m2!1sen!2sus"
              width="600"
              height="450"
              disableDefaultUI="true"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="right">
            <h2>Contact Us</h2>
            <div class="contact">
              <div class="form-container">
                <form
                  class="form"
                  action="https://formspree.io/f/mnqyzwjl"
                  method="POST"
                >
                  <div class="username">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Enter your Name"
                      required
                    />
                  </div>
                  <div class="useremail">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="usermessage">
                    <textarea
                      placeholder="Enter your message"
                      name="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="usersubmit">
                    <input type="submit" value="Contact Us" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
