import styles from "../styles/contact.module.css";
import React, { use, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className={styles.contact} id="contact">
        <h2>Shoot me a message</h2>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formTop}>
              <div className={styles.name}>
                <label htmlFor="name">
                  Name
                  {formFilled ? (
                    ""
                  ) : formData.name ? (
                    ""
                  ) : (
                    <span>Be nice if this wasn&apos;t blank</span>
                  )}
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className={styles.email}>
                <label htmlFor="email">
                  Email
                  {formFilled ? (
                    ""
                  ) : formData.email ? (
                    ""
                  ) : (
                    <span>Kinda need this one</span>
                  )}
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>

            <div className={styles.message}>
              <label htmlFor="message">
                Message
                {formFilled ? (
                  ""
                ) : formData.message ? (
                  ""
                ) : (
                  <span>Not a conversation starter?</span>
                )}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              className={
                formState === "sent"
                  ? styles.btnSent
                  : formState === "submit"
                  ? styles.btnSubmit
                  : styles.btnLoading
              }
            >
              {formState === "sent" ? "Sent" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
