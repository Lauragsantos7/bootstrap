function TemplateMaster() {
  return (
    <>
      <div className="card card-login mx-auto mt-5">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form>
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
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                type="password"
                name="password"
                id="password"
              ></input>
            </div>
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input"/> Lembrar minha senha

                </label>
              </div>
            </div>
            <button className="btn btn-primary btn-block">Entrar</button>
            <div className="text-center">
                <a href="#" className="d-block small mt-3">Criar conta</a>
                <a href="#" className="d-block small">Esqueceu a senha?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TemplateMaster;
