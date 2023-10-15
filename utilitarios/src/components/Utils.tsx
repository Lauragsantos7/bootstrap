function Utils() {
    return(
        <>
        <h3>  1- Border </h3>
        <div className="container row">
            <div className="col-2 border border-danger border-top-0">
                {/* sem borda em cima */}

            </div>

            <div className="col-2 border  border-danger rounded">
                {/* cantos arredondados */}

            </div>

            <div className="col-2 border border-danger rounded-top">
                {/* só a parte de cima arredondada */}

            </div>

            <div className="col-2 border border-danger rounded-circle">
                {/* arredondado */}

            </div>
        </div>

        </>
    )
}

export default Utils