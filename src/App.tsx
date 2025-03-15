import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import ListaRacas from "./components/ListaRacas";
import RacaSelecionada from "./components/RacaSelecionada";
import { useApi } from "./hooks/useApi";
import StatusContext from "./context/status";

function App() {
  const { racas, loading, error } = useApi();
  const [racaSelecionada, setRacaSelecionada] = useState<string | null>(null);
  const [imagemRaca, setImagemRaca] = useState<string | null>(null);

  const selecionaRaca = async (raca: string) => {
    setRacaSelecionada(raca);
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${raca.toLowerCase()}/images/random`
      );
      const data = await response.json();
      setImagemRaca(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
      setImagemRaca(null);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const racaAtual = racas.find(
    (raca) => raca.name.toLowerCase() === racaSelecionada?.toLowerCase()
  );

  const racaInfo = racaAtual
    ? {
        ...racaAtual,
        imagem: imagemRaca,
      }
    : {};

  return (
    <div className="container">
      <StatusContext.Provider value="A imagem será sempre diferente, pode clicar quantas vezes quiser!">
        <Cabecalho />
      </StatusContext.Provider>
      <div className="main-container">
        <RacaSelecionada raca={racaInfo} />
        <ListaRacas racas={racas} selecionaRaca={selecionaRaca} />
      </div>
    </div>
  );
}

export default App;
