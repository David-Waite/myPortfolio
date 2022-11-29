import styles from "../styles/contact.module.css";
import React, { use, useEffect, useState } from "react";

export default function About() {
  const [formState, setFormState] = useState("resting");
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
      event.preventDefault();
      console.log("Sending");

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        console.log("Response received");
        setFormState("loading");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setFormState("submit");
          }, 5000);
          setFormState("sent");
        } else if (res.status === 400) {
          console.log("error");
        }
      });
    } else {
      setFormFilled(false);
    }
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
                  ) : formData.email ? (
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
                ) : formData.email ? (
                  ""
                ) : (
                  <span>Not a convosation starter</span>
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
                  : formState === "loading"
                  ? styles.btnLoading
                  : styles.btnSubmit
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
