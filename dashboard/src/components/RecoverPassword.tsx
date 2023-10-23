import { Link } from "react-router-dom";
function RecoverPassword() {
    return (
      <>
      
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Recuperar senha</div>
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
             
              
              <button className="btn btn-primary btn-block">Recuperar senha</button>
              <div className="text-center">
              <Link to="/create-account" className="d-block small mt-3">Criar conta </Link>
                  <Link to="/" className="d-block small">Página de Login</Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default RecoverPassword