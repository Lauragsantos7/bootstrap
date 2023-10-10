function Sizing() {
    return(
        <>
        <h3>Sizing</h3>
        <div className="container col">
            <div className="p-3 mb-2 w-25 bg-primary">25%do elem. pai</div>
            <div className="p-3 mb-2 w-50 bg-secondary">50% do elem. pai</div>
            <div className="p-3 mb-2 w-75 bg-success">75% do elem. pai</div>
            <div className="p-3 mb-2 w-100 bg-danger">100% da largura do elem. pai</div>
        </div>
        <br />
        <div className="container bg-warning " >
            <div className="p-3 mb-2 h-25 bg-primary d-inline-block"></div>
            <div className="p-3 mb-2 h-50 bg-secondary d-inline-block"></div>
            <div className="p-3 mb-2 h-75 bg-success d-inline-block"></div>
            <div className="p-3 mb-2 bg-danger d-inline-block"></div>
           
        </div>
        </>
    )
}
export default Sizing