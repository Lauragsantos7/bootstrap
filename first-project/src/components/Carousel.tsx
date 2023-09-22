function Carousel() {
  return (
    <>
      <div className="container">
        <h3>Carrocel de imagens</h3>
        <div
          id="controleCarrocel"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#controleCarrocel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#controleCarrocel" data-slide-to="1"></li>
            <li data-target="#controleCarrocel" data-slide-to="2"></li>
            <li data-target="#controleCarrocel" data-slide-to="3"></li>
          </ol>{" "}
          {/* Para escolher para qual imagem deseja ir  */}

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="src/components/images/cidade-turistica-3.jpeg"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>So lugares bonitos</h3>

              </div> 
              {/* Para por legenda na foto */}
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="src/components/images/cidade-turistica1.jpeg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="src/components/images/download.jpeg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="src/components/images/cidade-turistica4.jpeg"
              />
            </div>
            <a
              href="#controleCarrocel"
              className="carousel-control-prev"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Voltar</span>
              {/* Apenas para tecnologias assistidas - leitor de tela para cegos */}
            </a>
            <a
              href="#controleCarrocel"
              className="carousel-control-next"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Avançar</span>
              {/* Apenas para tecnologias assistidas - leitor de tela para cegos */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
