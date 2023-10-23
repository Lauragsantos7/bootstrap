import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <>
      <div className="card card-register mx-auto mt-5">
        <div className="card-header">Crie sua conta</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                className="form-control"
                placeholder="Digite seu nome completo"
                type="text"
                name="name"
                id="name"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="address-street">Endereço</label>
              <input
                className="form-control"
                placeholder="Ex.: Av., Rua..."
                type="text"
                name="address-street"
                id="address-street"
              ></input>
              <br />
              <div className="form-row">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Número"
                    type="number"
                    name="address-number"
                    id="address-number"
                  ></input>
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Complemento"
                    type="text"
                    name="address-complement"
                    id="address-complement"
                  ></input>
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Cidade"
                    type="text"
                    name="address-city"
                    id="address-city"
                  ></input>
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Estado"
                    type="text"
                    name="address-state"
                    id="address-state"
                  ></input>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="birthday">Data de nascimento</label>
              <input
                className="form-control"
                placeholder="Digite sua data de nascimento"
                type="date"
                name="birthday"
                id="birthday"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                placeholder="Digite seu email"
                type="email"
                name="email"
                id="email"
              ></input>
            </div>
            <div className="form-group form-row">
              <div className="col-md-6">
                <label htmlFor="password">Senha</label>
                <input
                  className="form-control"
                  placeholder="Digite sua senha"
                  type="password"
                  name="password"
                  id="password"
                ></input>
              </div>
              <div className="col-md-6">
                <label htmlFor="password">Redigite a senha</label>
                <input
                  className="form-control"
                  placeholder="Confirme sua senha"
                  type="password"
                  name="password"
                  id="password"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" /> Lembrar
                  minha senha
                </label>
              </div>
            </div>
            <button className="btn btn-primary btn-block" type="button">Criar conta</button>
            <div className="text-center">
              <Link to="/" className="d-block small mt-3">
                Página de Login
              </Link>
              <Link to="/recoverpass" className="d-block small">
                Esqueceu a senha?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
