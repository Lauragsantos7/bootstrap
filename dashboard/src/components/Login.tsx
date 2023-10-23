import { useNavigate, Link } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  

  const redirectToHome = () => {
    navigate("/home")
  }

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
            <button type="button" onClick={redirectToHome} className="btn btn-primary btn-block">Entrar</button>
            <div className="text-center">
                <Link to="/create-account" className="d-block small mt-3">Criar conta </Link>
                <Link to="/recoverpass" className="d-block small">Esqueceu a senha?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
