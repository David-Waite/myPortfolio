import styles from "../styles/contact.module.css";
import React, { use, useState } from "react";

export default function About() {
  const [formState, setFormState] = useState("resting");
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
        setFormState("sent");
      }
    });
    console.log(formData);
  }

  return (
    <div>
      <div className={styles.contact} id="contact">
        <h2>Shoot me a message</h2>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formTop}>
              <div className={styles.name}>
                <label htmlFor="name"> Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className={styles.email}>
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>

            <div className={styles.message}>
              <label htmlFor="message"> Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              className={
                setFormState === "sent" ? styles.btnSent : styles.btnSubmit
              }
            >
              {formSent ? "Sent" : "Submit"}
            </button>
            <button className={styles.btnLoading}>loading</button>
          </form>
        </div>
      </div>
    </div>
  );
}
