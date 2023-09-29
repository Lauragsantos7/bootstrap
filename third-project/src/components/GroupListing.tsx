function GroupListing() {
  return (
    <>
      <div className="container col-6">
        <h3> Listagem em Grupo</h3>
        <ul className="list-group">
          <li className="list-group-item">Item 1</li>
          <li className="list-group-item active">Item 2</li>
          <li className="list-group-item disabled">Item 3</li>
        </ul>
        <br />
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            {" "}
            Link1
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            {" "}
            Link2
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            {" "}
            Link3
          </a>
        </div>
        <br />

        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            {" "}
            Button1
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            {" "}
            Button2
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            {" "}
            Button3
          </button>
        </div>
        <br />
        <div className="list-group">
          <a href="#" className="list-group-item list-groupa-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5>Título da lista</h5>
              <small>3 dias atrás</small>
            </div>
            <p className="mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aperiam tenetur inventore assumenda quo aliquid provident minus
              perspiciatis. Eos enim possimus praesentium nesciunt! Possimus
              alias aliquam ipsa voluptatibus tempore reprehenderit.
            </p>
          </a>

          <a href="#" className="list-group-item list-groupa-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5>Título da lista 2</h5>
              <small>3 dias atrás</small>
            </div>
            <p className="mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aperiam tenetur inventore assumenda quo aliquid provident minus
              perspiciatis. Eos enim possimus praesentium nesciunt! Possimus
              alias aliquam ipsa voluptatibus tempore reprehenderit.
            </p>
          </a>

          <a href="#" className="list-group-item list-groupa-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5>Título da lista 3</h5>
              <small>3 dias atrás</small>
            </div>
            <p className="mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aperiam tenetur inventore assumenda quo aliquid provident minus
              perspiciatis. Eos enim possimus praesentium nesciunt! Possimus
              alias aliquam ipsa voluptatibus tempore reprehenderit.
            </p>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="list-group" id="list-tab" role="tablist">
            <a
              href="#list-home"
              className="list-group-item list-group-item-action"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-control="home"
            >
              Home
            </a>

            <a
              href="#list-profile"
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              data-toggle="list"
              role="tab"
              aria-control="profile"
            >
              Profile
            </a>
            <a
              href="#list-contato"
              className="list-group-item list-group-item-action"
              id="list-contato-list"
              data-toggle="list"
              role="tab"
              aria-control="contato"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="col-9">
          <div className="tab-content" id="nav-tabContent">
            <div
              id="list-home"
              className="tab-pane fade show active"
              role="tabpane1"
              aria-labelledby="list-home-list"
            >
              <h3>Home</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                quidem ipsum molestias perferendis dignissimos repellat rem
                blanditiis earum dolore dicta reiciendis numquam laudantium
                dolor tenetur, fugit ex adipisci architecto consectetur!
              </p>
            </div>

            <div
              id="list-profile"
              className="tab-pane fade"
              role="tabpane1"
              aria-labelledby="list-profile-list"
            >
              <h3>Profile</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                quidem ipsum molestias perferendis dignissimos repellat rem
                blanditiis earum dolore dicta reiciendis numquam laudantium
                dolor tenetur, fugit ex adipisci architecto consectetur!
              </p>
            </div>
            <div id="list-contato" className="tab-pane fade" role="tabpane1" aria-labelledby="list-contato-list">
                <h3>Contato</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" className="form-control" placeholder="Digite seu nome"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Assunto</label>
                        <input type="text" id="subject" className="form-control" placeholder="Digite o assunto"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Conteúdo</label>
                        <textarea name="content" id="content" className="form-control"></textarea>
                    </div>
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupListing;
