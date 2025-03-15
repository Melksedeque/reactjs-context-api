import styles from "./ListaRacas.module.css";

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

const ListaRacas = ({ racas, selecionaRaca }: ListaRacasProps) => {
  return (
    <ul className={styles.lista_racas}>
      {racas.map((raca) => (
        <li
          key={raca.name}
          onClick={() => selecionaRaca(raca.name)}
          className={styles.lista_racas__item}
        >
          {raca.name}
        </li>
      ))}
    </ul>
  );
};

export default ListaRacas;
