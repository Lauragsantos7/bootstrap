import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        <nav className="navbar  navbar-expand-lg fixed-top" id="mainNav">
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
            aria-label="navegação toggle"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div id="navbarCurso" className="collapse navbar-collapse">
            <ul className="navbar-nav navbar-sidenav">
              <li className="nav-item" data-toggle="tooltip" data-placement="right">
                <Link to={"/curso"} className="nav-link">
                  <i className="fa fa-fw fa-dashboard"></i>
                  <span className="nav-link-text"> Dashboard </span>
                </Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right">
                <Link to={"/curso"} className="nav-link">
                  <i className="fa fa-fw fa-desktop"></i>
                  <span className="nav-link-text"> Desktop </span>
                </Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right">
                <Link to={"/curso"} className="nav-link">
                  <i className="fa fa-fw fa-mobile-phone"></i>
                  <span className="nav-link-text"> Mobile</span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav sidenav-toggler">
              <li className="nav-item">
                <a className="nav-link text-center" id="sidenavToggler">
                  <i className="fa fa-fw fa-angle-left"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Home;
