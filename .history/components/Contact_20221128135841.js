import styles from "../styles/contact.module.css";
import React from "react";

export default function About() {
  return (
    <div>
      <div className={styles.contact} id="contact">
        <h2>Shoot me a message</h2>
        <div>
          <form className={styles.form}>
            <div className={styles.formTop}>
              <div className={styles.name}>
                <label htmlFor="name"> Name</label>
                <input type="text" name="name" />
              </div>
              <div className={styles.email}>
                <label htmlFor="email"> Email</label>
                <input type="email" name="email" />
              </div>
            </div>

            <div className={styles.message}>
              <label htmlFor="message"> Message</label>
              <textarea name="message" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
