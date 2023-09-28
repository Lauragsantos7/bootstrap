function Popover() {
  return (
    <>
      <div className="container">
        <h3>Popover</h3>
        <p>
          ícone flutuando - biblioteaca de terceiros - instalado via cdn no
          arquivo index.html
        </p>

        <button
          type="button"
          className="btn btn-danger btn-lg"
          data-toggle="popover"
          title="Título do popover"
          data-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        >
          {" "}
          Clique para abrir o popover
        </button>

      </div>
      <div className="container">
      <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="popover"
          data-container="body"
          data-placement="top"
          
          data-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit huhuh"
        >
          {" "}
          popover top
        </button>
    <br />
        <button
          type="button"
          className="btn btn-danger btn-lg"
          data-toggle="popover"
          title="Título do popover"
          data-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
          data-container="body"
          data-placement="left"
        >
          {" "}
          popover left
        </button>
      </div>
    </>
  );
}

export default Popover;
