function Clearfix() {
  return (
    <>
      <h3>2- Clearfix</h3>
      <div className="bg-info clearfix">
        clearfix para preencher o restante da página
        <button className="btn btn-secondary float-left">
          Exemplo de Botão flutuando para esquerda
        </button>
        <button className="btn btn-secondary float-right">
          Exemplo de Botão flutuando para direita
        </button>
      </div>
      

      <h3>3 -Ícone fechar</h3>
      <button type="button" className="close" aria-label="Fechar">
  <span aria-hidden="true">x</span>
</button>

    </>
  );
}

export default Clearfix;
