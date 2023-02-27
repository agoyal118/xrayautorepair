import styles from "../styles/Appointment.module.css";
import AppointmentForm from "@/components/AppointmentForm";

const Appointment = () => {
  return (
    <main>
      <h1 className={styles.title_appointment}>Schedule Your Next Service</h1>
      <div className={styles.container_form}>
        <AppointmentForm />
      </div>
    </main>
  );
};

export default Appointment;
