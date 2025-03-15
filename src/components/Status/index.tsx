import styles from "./Status.module.css";
import StatusContext from "../../context/status";

const Status = () => {
  return (
    <StatusContext.Consumer>
      {(status) => <p className={styles.status}>{status}</p>}
    </StatusContext.Consumer>
  );
};

export default Status;
