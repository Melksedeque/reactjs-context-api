import Status from "../Status";
import styles from "./Cabecalho.module.css";

const Cabecalho: React.FC = () => {
  return (
    <header className={styles.cabecalho}>
      <h1 className={styles.cabecalho__titulo}>Dogpedia</h1>
      <p>
        Clique em um nome e te daremos informações úteis sobre a raça e uma
        imagem bem bonita
      </p>
      <Status />
    </header>
  );
};

export default Cabecalho;
