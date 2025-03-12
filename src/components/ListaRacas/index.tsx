import styles from "./ListaRacas.module.css";

import React from "react";

interface ListaRacasProps {
  racas: Array<{
    name: string;
    bred_for?: string;
    breed_group?: string;
    life_span?: string;
    temperament?: string;
    imagem?: string;
  }>;
  selecionaRaca: (raca: string) => void;
}

class ListaRacas extends React.Component<ListaRacasProps> {
  render() {
    const { racas, selecionaRaca } = this.props;
    return (
      <ul className={styles.lista_racas}>
        {racas.map((raca) => (
          <li
            key={raca.name}
            onClick={() => selecionaRaca(raca.name)}
            className="lista-racas__item"
          >
            {raca.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListaRacas;
