function Dropdowns() {
  return (
    <>
      <div className="container">
        <h3>Dropdowns</h3>
        <p>Ítens escondidos que aparecem ao clicar</p>
        <div className="dropdown">
          <button
            id="btn1"
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="btn1">
            <a className="dropdown-item" href="#">
              Link 1
            </a>
            <a className="dropdown-item" href="#">
              Link 2
            </a>
            <a className="dropdown-item" href="#">
              Link 3
            </a>
          </div>
        </div>
        <hr />
        <div className="dropdown">
          <a
            id="btn2"
            className="btn btn-primary dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Link dropdown{" "}
          </a>
          <div className="dropdown-menu" aria-labelledby="btn1">
            <h6 className="dropdown-header">Cabeçalho do menu</h6>
            <a className="dropdown-item disabled" href="#">
              Link 4
            </a>
            <a className="dropdown-item" href="#">
              Link 5
            </a>
            <a className="dropdown-item" href="#">
              Link 6
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Link separado
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdowns;
