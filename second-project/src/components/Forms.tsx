function Forms() {
  return (
    <>
      <h3>Forms</h3>
      <div className="container col-5">
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Email </label>
            <input
              type="email"
              className="form-control"
              name="inputEmail"
              id="inputEmail"
              placeholder="Insira seu email"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              Ex.: seuemail@seudominio.com.br
            </small>

            <label htmlFor="inputpassword">Senha </label>
            <input
              type="password"
              className="form-control"
              name="inputPassword"
              id="inputPassword"
              placeholder="Insira sua senha"
            />
            <br />
            <input
              className="form-control"
              placeholder="somente leitura"
              type="text"
              readOnly
            ></input>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" /> Manter
              conectado
            </label>
          </div>
          <button className="btn btn-success" type="submit">
            Entrar
          </button>
        </form>
      </div>

      <div className="col-12">
        <div className="row">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name" className="col-form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                ></input>
              </div>
              <div className="form-group col-md-6">
                {/* 6 é o tamanho das colunas do bootstrap. Pode organizar do tamanho que quiser ate chegar a 12 para fazer as colunas: 4-4-2-2 */}
              <label htmlFor="lastName" className="col-form-label">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite seu sobrenome"
                  id="lastName"
                  name="lastName"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
            <p>form in line</p>
            <form className="form-inline">
                <label className="sr-only" htmlFor="nameInLine">Nome</label>
                {/* "sr-only"  fica visível apenas para tecnologias assistidas */}
                <input type="text" id="nameInLine" placeholder="Digite seu nome" className="form-control mb-2 mr-2">
                </input>

                <label className="sr-only" htmlFor="passwordInLine">Senha</label>
                {/* "sr-only"  fica visível apenas para tecnologias assistidas */}
                <input type="text" id="passwordInLine" placeholder="Digite sua senha" className="form-control mb-2 mr-2">
                </input>
                <button className="btn btn-success ">Entrar</button>
            </form>

        </div>

      </div>
    </>
  );
}

export default Forms;
