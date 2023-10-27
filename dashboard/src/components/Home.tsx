import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-dark" id="page-top">
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top sticky-top "
          id="mainNav"
        >
          <a className="navbar-brand" href="#">
            Cursos disponíveis
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCurso"
            aria-control="navbarCurso"
            aria-expanded="false"
            aria-label="navegação-toggle"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div id="navbarCurso" className="collapse navbar-collapse" >
            <ul className="navbar-nav navbar-sidenav" id="linksAccordion">
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="right"
              >
                <Link to={"/curso"} className="nav-link">
                  <i className="fa fa-fw fa-dashboard"></i>
                  <span className="nav-link-text"> Dashboard </span>
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="right"
              >
                <Link to={"/curso"} className="nav-link">
                  <i className="fa fa-fw fa-desktop"></i>
                  <span className="nav-link-text"> Desktop </span>
                </Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" >
                <a className="nav-link nav-link-collapse collapse" href="#linksMobile" data-toggle="collapse" data-parent="linksAccordion">
                  <i className="fa fa-fw fa-mobile-phone"></i>
                  <span className="nav-link-text"> Mobile</span>
                </a>
                <ul className="sidenav-second-level collapse" id="linksMobile">
                <li>
                <Link to="/curso" className="nav-link">Mobile first</Link>
                <Link to="/curso" className="nav-link">Sistemas Operacionais</Link>
                </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav sidenav-toggler">
              <li className="nav-item">
                <a className="nav-link text-center" id="sidenavToggler">
                  <i className="fa fa-fw fa-angle-left"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <form action="" className="form-inline my-2 my-lg-0 mr-lg-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pesquisar"
                    />
                    <span className="input-group-btn">
                      <button className="btn" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link">
              <i className="fa fa-sign-out">Logout</i>
              </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Página inicial</li>
            </ol>
            <h1>Título</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore aut temporibus accusantium, fuga, est rerum, nesciunt
              quibusdam accusamus officia ea voluptatibus veritatis quae
              placeat! Adipisci architecto atque cum molestiae laborum?
            </p>
          </div>
        </div>
      </div>
      <footer className="sticky-footer">
        <div className="container">
          <div className="text-center">
            <small>Copyright seu site 2017</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
