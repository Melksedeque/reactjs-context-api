import styles from "./RacaSelecionada.module.css";

import React from "react";

interface RacaSelecionadaProps {
  raca: {
    name?: string;
    bred_for?: string;
    breed_group?: string;
    life_span?: string;
    temperament?: string;
    imagem?: string;
  };
}

class RacaSelecionada extends React.Component<RacaSelecionadaProps> {
  render() {
    const { raca } = this.props;
    return (
      <>
        <div className={styles.raca_selecionada}>
          <img src={raca.imagem} alt={raca.name} />
        </div>
        <div className={styles.info}>
          <h1>{raca.name}</h1>
          {raca.bred_for && <p>Criado para: {raca.bred_for}</p>}
          {raca.breed_group && <p>Grupo: {raca.breed_group}</p>}
          {raca.life_span && <p>Tempo médio de vida: {raca.life_span}</p>}
          {raca.temperament && <p>Temperamento: {raca.temperament}</p>}
        </div>
      </>
    );
  }
}

export default RacaSelecionada;
