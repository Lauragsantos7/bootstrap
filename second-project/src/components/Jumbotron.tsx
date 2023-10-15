function Jumbotron() {
    return(
        <>
        <h3>Jumbotron</h3>
        <p>Para apresentar conteudo no estilo de unidade heroi - tela grandona </p>
        <div className="">
            <div className="jumbotron">
                <h1 className="display-3">Hello world!</h1>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in deserunt ad laborum qui iure quibusdam inventore voluptatum, nobis numquam adipisci magnam repudiandae aliquam reiciendis obcaecati porro? Similique, officia doloribus.</p>
                <hr className="my-4"/>
                <p className="lead">
                    <a href="#" className="btn btn-info btn-lg" role="button"> Saiba mais

                    </a>
                </p>

            </div>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-3">Hello world!</h1>
                <p className="lead">Retirou os cantos e aproveitou melhor o espaço do jumbotron. <br />
                nobis numquam adipisci magnam repudiandae aliquam reiciendis obcaecati porro? Similique, officia doloribus.</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Jumbotron