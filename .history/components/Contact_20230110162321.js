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
