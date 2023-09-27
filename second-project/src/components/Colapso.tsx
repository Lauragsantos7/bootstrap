function Colapso() {
  return (
    <>
      <div className="container">
        <h1>Colapso</h1>
        <p>
          {" "}
          Permite esconder ou mostrar um item usando botão-janela ou sanfona.
          Precisa de um disparador(botao, por ex.)
        </p>
        <p>
          <a
            href="#itemColapse1"
            className="btn btn-primary"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="#itemColapse1"
          >
            Disparador href
          </a>
          <button
            className="btn btn-danger"
            data-toggle="collapse"
            type="button"
            data-target="#itemColapse1"
          >
            Disparador button
          </button>
          {/* No button, o disparador é o data-target */}
        </p>
        <div className="collapse" id="itemColapse1">
          <div className="card card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet quibusdam vel! Consectetur iste quasi, beatae ut laborum nihil
            eligendi consequuntur assumenda veritatis, reprehenderit quis sed
            voluptate, aut nisi. Quisquam?
          </div>
        </div>

        <hr />
        {/* Os iten abaixo são encaixados na  ordem certa, mesmo que  o item 3 seja ativado antes do 2 */}
        <p>
          <a
            href="#itemColapse2"
            className="btn btn-primary"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="#itemColapse2"
          >
            Disparador href item 2
          </a>

          <button
            className="btn btn-danger"
            data-toggle="collapse"
            type="button"
            data-target="#itemColapse3"
          >
            Disparador button item 3
          </button>
          {/* No button, o disparador é o data-target */}
        </p>
        <div className="collapse" id="itemColapse2">
          <div className="card card-body">
            Item 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur amet quibusdam vel! Consectetur iste quasi, beatae ut
            laborum nihil eligendi consequuntur assumenda veritatis,
            reprehenderit quis sed voluptate, aut nisi. Quisquam?
          </div>
        </div>
        <div className="collapse" id="itemColapse3">
          <div className="card card-body">
            Item 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur amet quibusdam vel! Consectetur iste quasi, beatae ut
            laborum nihil eligendi consequuntur assumenda veritatis,
            reprehenderit quis sed voluptate, aut nisi. Quisquam?
          </div>
        </div>
      </div>
    </>
  );
}
export default Colapso;
