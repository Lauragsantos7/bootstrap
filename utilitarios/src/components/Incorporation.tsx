function Incorporation() {
  return (
    <>
      <h3> Incorporação de conteúdo</h3>
      <div className="container">
        <div className="embed-responsive embed-responsive-16by9">
            {/* 16by9 é o padrão do youtube, mas o vídeo pode ter outros tamanhos tbm: 1by1, 4by3, 21by9 */}
          <iframe
          className="embed-responsive-item"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fFLUq0v6dls"
            allowFullScreen
          ></iframe>
        </div>

        <div className="embed-responsive embed-responsive-4by3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/watch?v=CAwIX9v9j9A&list=RDCAwIX9v9j9A&start_radio=1&ab_channel=ZéNetoeCristiano"
              allowFullScreen
            ></iframe>
        </div>

        {/* embed para pegar o link e colocar no site */}
      </div>
    </>
  );
}

export default Incorporation;
