function Badges() {
  return (
    <>
      <div>
        <div>
          {/* No geral são usados para informar que o conteúdo é novo, em blogs,
          sites de venda, etc */}
          <p>
            Bragdes 
            <br />
            Exemplo de cabeçalho 
            {" "}
            <span className="badge badge-secondary"> Novo</span>
          </p>
        </div>
        <div className="row">
            <button className="btn">
                Notificações <span className="badge badge-primary"> 5</span>
            </button>
        </div>
      </div>
      <div>
        <h3>Breadcrumb - árvore de hierarquia do site</h3>
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item">Preferencias</li>
            <li className="breadcrumb-item active">Minhas Preferencias</li> 
            {/* Em navegação secundária, por os links dentro da lista */}

          </ol>
          <nav  className="breadcrumb">
            <a href="#" className="breadcrumb-item">Pode ser feito com nav tbm</a>
            <a href="#" className="breadcrumb-item">Para gerar link</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Badges;
