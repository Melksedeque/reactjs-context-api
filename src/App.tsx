import React from "react";

import { buscaSobreRacas, buscaImagemPorRaca, buscaTodasRacas } from "./api";
import Cabecalho from "./components/Cabecalho";
import Raca from "./components/Raca";
import ListaRacas from "./components/ListaRacas";
import StatusContext from "./context/status";

interface IRaca {
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span?: string;
  temperament?: string;
  imagem?: string;
}

interface IAppState {
  racas: IRaca[];
  racaSelecionada: Partial<Raca>;
  status: string;
}

interface IAppProps {}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      racas: [],
      racaSelecionada: {},
      status: "Você ainda não selecionou nenhum cachorro :(",
    };
  }

  componentDidMount() {
    this.carregaInformacoesIniciais();
  }

  carregaInformacoesIniciais() {
    buscaSobreRacas()
      .then((informacoes) => {
        this.carregaListaRacas(informacoes);
      })
      .catch((erro) =>
        this.setState({
          status:
            "Oops, algo deu errado no carregamento da página. Pode tentar novamente?",
        })
      );
  }

  carregaListaRacas(sobreRacas: IRaca[]): void {
    buscaTodasRacas().then((racas) => {
      const listaRacasMostradas = sobreRacas.filter((sobre) =>
        racas.includes(sobre.name.toLowerCase())
      );
      this.setState({ racas: [...listaRacasMostradas] });
    });
  }

  selecionaRaca = (raca: string): void => {
    const infoSelecionada = this.state.racas.filter(
      (infoRaca) => infoRaca.name === raca
    );

    buscaImagemPorRaca(raca)
      .then((imagem) =>
        this.setState({
          racaSelecionada: {
            ...this.state.racaSelecionada,
            imagem,
            ...infoSelecionada[0],
          },
          status:
            "A imagem sempre será diferente, pode clicar quantas vezes quiser!",
        })
      )
      .catch((erro) => {
        const eh404 = erro.response?.status === 404;
        const mensagem = eh404
          ? "Não encontramos essa raça :("
          : "Oops, algo deu errado. Pode tentar novamente?";

        this.setState({ status: mensagem });
      });
  };

  render() {
    return (
      <div className="container">
        <StatusContext>
          <Cabecalho />
        </StatusContext>
        <Raca raca={this.state.racaSelecionada} />
        <ListaRacas
          racas={this.state.racas}
          selecionaRaca={this.selecionaRaca}
        />
      </div>
    );
  }
}

export default App;
