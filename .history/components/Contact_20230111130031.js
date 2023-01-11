import styles from "../styles/contact.module.css";
import React, { use, useEffect, useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSumitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        submitEnquiryForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha]
  );
  console.log(name);

  const submitEnquiryForm = (gReCaptchaToken) => {
    fetch("/api/enquiry", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "response from backend");
        console.log(name);
        if (res?.status === "success") {
          setNotification(res?.message);
        } else {
          setNotification(res?.message);
        }
      });
  };

  return (
    <div>
      <div className={styles.contact} id="contact">
        <h2>Shoot me a message</h2>
        <div>
          <form className={styles.form} onSubmit={handleSumitForm}>
            <div className={styles.formTop}>
              <div className={styles.name}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e?.target?.value)}
                  value={name}
                />
              </div>
              <div className={styles.email}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e?.target?.value)}
                  value={email}
                />
              </div>
            </div>

            <div className={styles.message}>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e?.target?.value)}
              />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
          {notification && <p>{notification}</p>}
        </div>
      </div>
    </div>
  );
}
