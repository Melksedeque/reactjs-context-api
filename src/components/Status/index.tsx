import styles from "./Status.module.css";

import React from "react";

interface StatusProps {
  status: string;
}

class Status extends React.Component<StatusProps> {
  render() {
    return <p className={styles.status}>{this.props.status}</p>;
  }
}

export default Status;
