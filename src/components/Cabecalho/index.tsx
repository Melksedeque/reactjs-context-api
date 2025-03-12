import styles from "./Cabecalho.module.css";

import React from "react";
import Status from "@/components/Status";

interface CabecalhoProps {
  status: string;
}

class Cabecalho extends React.Component<CabecalhoProps> {
  render() {
    return (
      <header className={styles.cabecalho}>
        <h1 className={styles.cabecalho__titulo}>Dogpedia</h1>
        <Status status={this.props.status} />
      </header>
    );
  }
}

export default Cabecalho;
