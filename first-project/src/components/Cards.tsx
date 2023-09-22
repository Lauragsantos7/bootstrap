function Cards() {
  return (
    <>
      <h3>Cards</h3>
      <div className="container">
        <div className="card border-primary">
          <div className="card-body text-danger">Esse é um texto vermelho dentro de um card com borda azul</div>
        </div>
        <br />
        <div className="card">
          <img
            src="src/components/images/cafe-manha.jpg"
            className="card-img-top"
          />
           
          <h1 className="card-img-overlay text-white text-center">Bora tomar um café?</h1>
         
          <div className="card-body">
            {/* texto sobre a foto */}
            <div className="card-header">Cabeçalho do cartão</div>
            <h4 className="card-title"> Título do cartão</h4>
            <h6 className="card-sub-title text-muted">subtítulo do cartão</h6>
            <p className="card-text">
              Texto do cartão - Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Pariatur velit molestiae dolorem accusantium nam
              laborum quos nobis commodi, aut atque, autem neque magnam qui ex
              iure. Consequuntur praesentium amet nam.
            </p>
            <a href="#" className="card-link">
              Link do cartão
            </a>
            <div className="card-footer">Rodapé do cartão</div>
          </div>
        </div>
        <br />
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Item 1 da lista</li>
            <li className="list-group-item">Item 2 da lista</li>
            <li className="list-group-item">Item 3 da lista</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cards;
