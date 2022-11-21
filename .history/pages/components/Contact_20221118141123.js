import styles from "../../styles/contact.module.css";
import React from "react";

export default function About() {
  const [formData, setFormData] = React.useState({
    Name: "",
    Email: "",
    Message: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <div>
      <div className={styles.contact}>
        <h2>Shoot me a message</h2>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formTop}>
              <div className={styles.name}>
                <label htmlFor="Name"> Name</label>
                <input
                  type="text"
                  name="Name"
                  onChange={handleChange}
                  value={formData.Name}
                />
              </div>
              <div className={styles.email}>
                <label htmlFor="Email"> Email</label>
                <input
                  type="Email"
                  onChange={handleChange}
                  name="Email"
                  value={formData.Email}
                />
              </div>
            </div>

            <div className={styles.message}>
              <label htmlFor="Message"> Message</label>
              <textarea
                value={formData.Message}
                onChange={handleChange}
                name="Message"
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
