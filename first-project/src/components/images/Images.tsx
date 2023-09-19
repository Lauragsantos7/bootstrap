function Images() {
  return (
    <>
      <p>Imagens</p>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="src/components/images/pexels-photo-2055389.jpeg"
              className="img-thumbnail"
            />

            {/* 'img-fluid' para a imagem ficar responsiva, thumbnail para ter borda e ficar responsiva, rounded para bordas arredondadas */}
            <figure className="figure">
              <img
                src="src/components/images/download.png"
                className="img-fluid"
              />
              <figcaption className="figure-caption">
                Legenda para a figura acima
              </figcaption>
            </figure>

            <img
              src="src/components/images/pexels-photo-2055389.jpeg"
              className="img-fluid rounded float-rigth"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Images;
