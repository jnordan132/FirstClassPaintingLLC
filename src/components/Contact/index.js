import React from "react";
import "./index.css";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237105.85755898777!2d-77.82044748805545!3d34.18258358082521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9eddad5d07e0f%3A0x4f36d667d1a5cf1b!2sNew%20Hanover%20County%2C%20NC!5e0!3m2!1sen!2sus!4v1678637336232!5m2!1sen!2sus"
          width="600"
          height="550"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    );
  }
}

export default Contact;
