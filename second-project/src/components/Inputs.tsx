function InputGroup() {
    return(
        <>
        <h3>
            Input group
        </h3>
        <div className="container">
            <div className="row col-6">
                <div className="input-group">
                    <span className="input-group-addon" id="input1">@</span>
                    <input type="text" className="form-control" placeholder="Nome de Usuário" name="input1" aria-label="Nome de Usuário" aria-aria-describedby="input1"/>
                </div>
            </div>

            <div className="row col-6">
                <div className="input-group">
                   
                    <input type="text" className="form-control" placeholder="Seu domínio" name="input2" aria-label="Seu domínio" aria-aria-describedby="input2"/>
                    <span className="input-group-addon" id="input2">@google.com</span>
                </div>
            </div>
            <div className="row col-6">
                <div className="input-group">
                    <span className="input-group-addon">
                        <input type="checkbox"aria-label="checkbox acompanhando inpuit de texto" />
                    </span>
                    <input type="text" className="form-control" aria-label="input de texto acompanhando checkbox"/>
                    
                </div>

            </div>
            <div className="row col-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua pesquisa "
            />
            <span className="input-group-btn">
                <button className="btn btn-info">Buscar</button>

            </span>
            
          </div>
        </div>
        </div>
        </>
    )
}

export default InputGroup