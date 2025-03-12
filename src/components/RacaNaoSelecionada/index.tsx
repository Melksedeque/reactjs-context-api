import styles from "./RacaNaoSelecionada.module.css";

import React from "react";

class RacaNaoSelecionada extends React.Component {
  render() {
    return (
      <div className={styles.raca_nao_selecionada}>
        <h2>Clique em um cachorro para saber mais sobre ele!</h2>
      </div>
    );
  }
}

export default RacaNaoSelecionada;
