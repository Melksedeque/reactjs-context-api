import Status from "../Status";
import styles from "./Cabecalho.module.css";

const Cabecalho: React.FC = () => {
  return (
    <header className={styles.cabecalho}>
      <h1 className={styles.cabecalho__titulo}>Dogpedia</h1>
      <Status />
    </header>
  );
};

export default Cabecalho;
