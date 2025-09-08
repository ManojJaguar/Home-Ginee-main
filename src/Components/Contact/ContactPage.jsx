import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>

        {/* ✅ Google Maps Embed without API Key */}
        <div className="contactMap">
          <iframe
            title="homegeniee-map"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              "Hubli, Karnataka"
            )}&z=13&output=embed`}
          ></iframe>
        </div>

        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Store in Karnatka</h3>
              <p>
                1418 River Drive, Suite 35 Cottonhall, CA 9622
                <br /> India
              </p>
              <p>
                admin@dummymail.com
                <br />
                +44 20 7123 4567
              </p>
            </div>

            <div className="address">
              <h3>Store in India</h3>
              <p>
                A-791, Bandra Reclamation Rd, Mumbai
                <br /> Maharashtra
              </p>
              <p>
                contact@dummymail.com
                <br />
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
