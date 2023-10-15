function Modal() {
  return (
    <>
      <div className="container">
        <h3>Modal</h3>
        <p>Plugin JS que fica sobre todo o conteúdo do site</p>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal-ex-1" >Disparador do modal</button>
        <div className="modal fade" id="modal-ex-1"> 
        {/* fade para que a caixa de texto abra delicadamente */}
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Título do modal</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Fechar"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Corpo do modal</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal"> Salvar alterações</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal"> Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
