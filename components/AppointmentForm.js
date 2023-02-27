import { useRef, useState } from "react";
import styles from "../styles/components/AppointmentForm.module.css";

const FirstName = ({ name }) => {
  if (name.length > 0) {
    const firstName = name.substring(0, name.indexOf(" "));
    return <h2>Thanks {firstName}! </h2>;
  }
  return null;
};

const AppointmentForm = () => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [name, setName] = useState("");

  const form = useRef();

  const toggleShowSubmit = () => {
    setShowSubmit(!showSubmit);
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    const formData = {};

    Array.from(event.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    formData["source"] = "Appointment Request";

    try {
      await fetch("/api/appointment", {
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }

    toggleShowSubmit();
  };

  if (showSubmit) {
    return (
      <div className={styles.button_submit}>
        <FirstName name={name} />
        <h2>We have received your request!</h2>
        <p>
          Someone from our team will reach out to you within the next 24 to
          finalize the details. If this is an emergency, please give us a call
          at 815-994-4349.
        </p>
        <h3>Your First Visit</h3>
        <p>{`You can expect us to...`}</p>
        <input
          type="submit"
          value="Close"
          onClick={toggleShowSubmit}
          className={styles.input_submit}
        />
      </div>
    );
  }
  return (
    <div className={styles.container_form}>
      <h2>Request Appointment</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.wrapper_inputs}>
          <div className={styles.box}>
            <label htmlFor="name-input">Full Name</label>
            <input
              id="name-input"
              type="text"
              placeholder="Required"
              name="full_name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="phone-input">Phone</label>
            <input
              id="phone-input"
              type="tel"
              placeholder="Required"
              name="phone_number"
              required
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="email-input">E-mail</label>
            <input id="email-input" type="email" name="email" />
          </div>
        </div>
        <div className={styles.wrapper_inputs}>
          <div className={styles.box}>
            <label htmlFor="make-input">Vehicle Make (Brand)</label>
            <input id="make-input" type="text" name="make" />
          </div>
          <div className={styles.box}>
            <label htmlFor="model-input">Vehicle Model</label>
            <input id="model-input" type="text" name="model" />
          </div>
          <div className={styles.box}>
            <label htmlFor="year-input">Vehicle Year</label>
            <input id="year-input" type="text" name="year" />
          </div>
        </div>
        <div className={styles.wrapper_inputs}>
          <div className={styles.box_textarea}>
            <label htmlFor="service-textarea">Service Requests</label>
            <textarea id="service-textarea" name="message" />
          </div>
        </div>
        <div className={styles.wrapper_inputs}>
          <div className={styles.box_date}>
            <label htmlFor="date-input">Preferred Date</label>
            <input id="date-input" type="date" name="preferred_date" />
          </div>
          <div className={styles.box_date}>
            <label htmlFor="second-date-input">Secondary Date Choice</label>
            <input id="second-date-input" type="date" name="secondary_date" />
          </div>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default AppointmentForm;
