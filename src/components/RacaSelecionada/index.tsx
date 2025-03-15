import styles from "./RacaSelecionada.module.css";

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

const RacaSelecionada = ({ raca }: RacaSelecionadaProps) => {
  if (!raca.name) {
    return null;
  }

  return (
    <div className={styles.raca_selecionada}>
      <figure className={styles.imagem_raca}>
        <img
          src={raca.imagem}
          alt={raca.name}
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x300?text=Imagem+não+encontrada";
          }}
        />
        <figcaption sr-only hidden>
          <em>Imagem de {raca.name}</em>
        </figcaption>
      </figure>
      <div className={styles.info}>
        <h1 className={styles.name}>{raca.name}</h1>
        {raca.bred_for && <p>Criado para: {raca.bred_for}</p>}
        {raca.breed_group && <p>Grupo: {raca.breed_group}</p>}
        {raca.life_span && <p>Tempo médio de vida: {raca.life_span}</p>}
        {raca.temperament && <p>Temperamento: {raca.temperament}</p>}
      </div>
    </div>
  );
};

export default RacaSelecionada;
