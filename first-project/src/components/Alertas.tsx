function Alertas() {
    return(
        <>
        <p>Alertas</p>
        <div className="container-fluid">
            <div className="row">
                <div className="alert alert-primary" role="alert"> O alerta é apenas visual <a href="#" className="alert-link">Este é o link</a></div> 

                <div className="alert alert-secondary" role="alert"> Com várias cores diferentes</div> 

                <div className="alert alert-warning" role="alert"> dependedo da classe</div> 

                <div className="alert alert-info" role="alert"> dependedo que deve ser mudada</div> 

                <div className="alert alert-light" role="alert"> em cada tag </div> 

                <div className="alert alert-danger alert-dismissible fade show" role="alert"> 
                <button type="button" className="close" data-dismiss="alert" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                </button>X para fechar o alert  </div> 
            </div>
        </div>
            
            </>
    )
}
export default Alertas