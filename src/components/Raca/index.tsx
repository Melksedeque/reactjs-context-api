import React from "react";
import RacaSelecionada from "../RacaSelecionada";
import RacaNaoSelecionada from "../RacaNaoSelecionada";

interface IRacaProps {
  raca: {
    name?: string;
    bred_for?: string;
    breed_group?: string;
    life_span?: string;
    temperament?: string;
    imagem?: string;
  };
}

class Raca extends React.Component<IRacaProps> {
  render() {
    const { raca } = this.props;
    return (
      <div className="container">
        {raca.imagem ? <RacaSelecionada raca={raca} /> : <RacaNaoSelecionada />}
      </div>
    );
  }
}

export default Raca;
