import styles from "../styles/contact.module.css";
import React, { use, useEffect, useState } from "react";

export default function About() {
  const [formState, setFormState] = useState("submit");
  const [formFilled, setFormFilled] = useState(true);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormFilled(true);

    if (formData.name && formData.email && formData.message) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(SITE_KEY, { action: "submit" })
          .then(async (token) => {
            /* send data to the server */

            const body = {
              name,
              email,
              recaptchaResponse: token,
            };

            try {
              const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json;chaset=utf-8" },
                body: JSON.stringify(body),
              });
              if (response.ok) {
                const json = await response.json();
                setResult(json);
              } else {
                throw new Error(response.statusText);
              }
            } catch (error) {
              setResult({ message: error.message });
            }

            /* End of the sending data */

            setProcessing(false);
            setCompleted(true);
          });
      });
      console.log("Sending");
      
  }

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
