function Buttons() {
  return (
    <>
      <h3>Buttons</h3>
      <div className="container">
        <div className="">
          <button className="btn btn-primary btn-lg">Primário</button>
          <a href="#" className="btn btn-secondary btn-sm" role="button">
            Secundário
          </a>
          <input
            type="button"
            className="btn btn-success"
            value="Success"
          ></input>
          <input
            type="submit"
            className="btn btn-danger"
            value="Danger"
          ></input>
          <input
            type="reset"
            className="btn btn-warning"
            value="Warning"
          ></input>

          <button className="btn btn-info">Informação</button>
          <button className="btn btn-dark">sombrio</button>
          <button className="btn btn-link">Link</button>
          <br />
          <p>Para tarjar so a borda:</p>
          <button className="btn btn-outline-info">Informação</button>
          <br />
          <p>Para ficar do tamanho do elemento pai:</p>
          <button className="btn btn-outline-info btn-block">Informação</button>

          <button className="btn btn-primary ">Primário</button>
          <button className="btn btn-primary active">Primário</button>
          <button className="btn btn-primary disabled">Primário</button>
          <br />
          <br />
          <p>Grupo de botões</p>
          <div className="btn-group" role="group" aria-label="exemplo">
            {/* aria-label para tecnologias assistidas- acessibilidade */}
            <button className="btn btn-primary">Esquerdo</button>
            <button className="btn btn-primary ">Centro</button>
            <button className="btn btn-primary ">Direito</button>
          </div>
          <br />
          <br />
          <div className="tbm-toolbar" role="toolbar" aria-label="toolbar de botões">
            <div className="btn-group mr-2" role="group" 
            // mr-2 para dar padding entre os botões
            aria-label="primeiro grupo">
              <button className="btn btn-success ">1</button>
              <button className="btn btn-success ">2</button>
              <button className="btn btn-success ">3</button>
            </div>
            <div className="btn-group" role="group" aria-label="segundo grupo">
              <button className="btn btn-success ">4</button>
              <button className="btn btn-success ">5</button>
              <button className="btn btn-success ">6</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
