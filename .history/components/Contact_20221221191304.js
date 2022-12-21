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
  const { executeRecaptcha } = useGoogleReCaptcha();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  const handleSumitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        console.log(gReCaptchaToken, "response Google reCaptcha server");
        submitEnquiryForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha]
  );

  const submitEnquiryForm = (gReCaptchaToken) => {
    event.preventDefault();
    setFormFilled(true);

    if (formData.name && formData.email && formData.message) {
      event.preventDefault();
      console.log("Sending");
      setFormState("loading");
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, gRecaptchaToken: gReCaptchaToken }),
      }).then((res) => {
        console.log("Response received");

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

  function handleSubmit(event) {}

  return (
    <div>
      <div className={styles.contact} id="contact">
        <h2>Shoot me a message</h2>
        <div>
          <form className={styles.form} onSubmit={handleSumitForm}>
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
