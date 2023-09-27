function Paginador() {
  return (
    <>
      <h3> Paginador</h3>
      <div className="container">
        <div className="r">
          <nav aria-label="Paginador">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Anterior
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  Próxima
                </a>
              </li>
            </ul>
          </nav>
          
         
          <p>anterior o próxima com icones</p>
          <nav aria-label="Paginador">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                {/* desabilita o botão anterior */}
                <a className="page-link" href="#">
                  <span aria-hidden="true"> &laquo;</span>
                  <span className="sr-only">Anterior</span>
                </a>
              </li>

              <li className="page-item active">
                {/* deixa o ícone de pagina 1 ativo */}
                <a className="page-link" href="#">
                  1
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                <span aria-hidden="true"> &raquo;</span>
                <span className="sr-only">Próximo</span>
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Paginador">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                {/* desabilita o botão anterior */}
                <a className="page-link" href="#">
                  <span aria-hidden="true"> &laquo;</span>
                  <span className="sr-only">Anterior</span>
                </a>
              </li>

              <li className="page-item active">
                {/* deixa o ícone de pagina 1 ativo */}
                <a className="page-link" href="#">
                  1
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                <span aria-hidden="true"> &raquo;</span>
                <span className="sr-only">Próximo</span>
                </a>
              </li>
            </ul>
          </nav>
          
        </div>
      </div>
    </>
  );
}

export default Paginador;
