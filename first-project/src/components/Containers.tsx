function Containers() {
    return (
      <>
        <p className="h1"> Containers</p>
        {/* Embora a tag seja um p, o tamanho é de um h1 */}
        <div className="container-fluid">
          <div className="row">
            <div className="col bg">container-fluid</div>
            <div className="col-xl-4 col-sm-12 bg"></div>
            {/* a coluna vai ocupar, em dispositivos gdes, 4 colunas do bootstrap  e em disp peq. 12 colunas do bootstrap*/}
            <div className="col bg"></div>
            <div className="col bg"></div>
            <div className="col bg"></div>
            <div className="col bg"></div>
            {/* Cada className col representa uma coluna feita automaticamente pelo bootstrap 
          bg é a classe em que o css foi feito dentro de App.css para ver o resultado na tela*/}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-7 bg">container</div>
            {/* o 7 é a largura da coluna */}
            <div className="col-1 bg"></div>
            <div className="col bg"></div>
            <div className="col bg"></div>
          </div>
        </div>
        <div className="row">
          <div className="col bg order-12">Primeiro item</div>
          {/* ordem de apresentação das colunas 'order' */}
          <div className="col bg order-1">segundo item</div>
          <div className="col bg order-2">terceiro item</div>
        </div>
        <br />
        <hr />
        
        </>
    )}
    export default Containers