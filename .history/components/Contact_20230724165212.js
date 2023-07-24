import styles from "../styles/contact.module.css";
import React, { useState, useCallback } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormFilled(true);

    if (formData.name && formData.email && formData.message) {
      setFormState("loading");
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then((res) => {
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
  };

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
              type="submit"
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
      <p className={styles.abn}>ABN: 83 626 560 303</p>
    </div>
  );
}
