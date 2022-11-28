import styles from "../styles/contact.module.css";
import React from "react";

export default function About() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
    // submitToApi(formData)
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
                placeholder="Comments"
                onChange={handleChange}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
