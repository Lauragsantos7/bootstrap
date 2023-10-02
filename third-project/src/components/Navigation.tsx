function Navigation() {
  return (
    <>
      <div className="container">
        <h3>Navegação</h3>
        <p>
          Navegação principal do site: tag nav. Se for a navegação secundária,
          usar lista ul{" "}
        </p>
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link 1
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link 2
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link 3
            </a>
          </li>
        </ul>
        <nav className="nav flex-column">
          {/* Navegação na vertical */}
          <a href="#" className="nav-link">
            Nav 1
          </a>
          <a href="#" className="nav-link">
            Nav 2
          </a>
          <a href="#" className="nav-link">
            Nav 3
          </a>
        </nav>

        <nav className="nav nav-tabs">
          {/* navegação em abas */}
          <a href="#" className="nav-link">
            Nav 1
          </a>
          <a href="#" className="nav-link">
            Nav 2
          </a>
          <a href="#" className="nav-link">
            Nav 3
          </a>
        </nav>
        <nav className="nav nav-pills">
          {/* navegação em pills */}
          <a href="#" className="nav-link">
            Nav 1
          </a>
          <a href="#" className="nav-link">
            Nav 2
          </a>
          <a href="#" className="nav-link">
            Nav 3
          </a>
        </nav>
      </div>
      <div className="container">
        <h3>Barra de navegação</h3>
        <nav className="navbar navbar-light navbar-expand-lg">
        {/* navbar-expand-lg - os links só vao ficar no collapse se a tela for pequena. Cso a tela seja gde,eles serão mostrdos no painel  
        navbar-light bg-light fundo branco com letras claras que escurecem ao passar o mouse 
        navbar-dark bg-dark - painel fica em "dark-mode" 
        fixed-top pro cabeçalho ficar fixo no topo da tela qdo rolar a barra de rolagem*/}
          <a className="navbar-brand" href="#">
            <img
              src="src/components/images/heart.png"
              width="30"
              className="d-inline-block align-top"
            />
            Links
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav1"
            aria-controls="nav1"
            aria-expanded="false"
            aria-label="navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="nav1">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link">Profile</a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link">Settings</a>
                </li>

                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" id="linkDrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                    <div className="dropdown-menu" aria-labelledby="linkDrop">
                        <a href="#" className="dropdown-item">Novidades</a>
                        <a href="#" className="dropdown-item">Tecnologia</a>
                        <a href="#" className="dropdown-item">Notícias</a>
                    </div>
                </li>
            </ul>
            <form className="form-inline">
                <input className="form-control nr-sm-2" type="text" placeholder="Pesquisar" aria-label="Pesquisar"></input>
                <button className="btn btn-outline-primary my-2 my-sm-0">Buscar</button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navigation;
