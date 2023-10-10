function Position() {
  return (
    <>
      <h3> Position</h3>
      <p>
        Você pode usar este utilitário para configurar rapidamente a posição de um elemento. 
        Posicione um elemento no topo da viewport, de uma
        borda a outra com 'fixed-top', ou um rodapé com 'fixed-bottom'Pode ser seja necessário adicionar CSS adicionais para  manipular os conteúdos da página.
        Posicione um elemento na parte superior da viewport, de uma borda a outra, mas somente depois de percorrê-lo. O sticky-top utilitário usa CSS position: sticky, que não é totalmente suportado em todos os navegadores.
      </p>
      {/* <div className="fixed-top">Topo fixo</div>
      <div className="fixed-bottom">Rodapé fixo</div>
      <div className="sticky-top">Stick</div> - nao funcionou */}
      
    </>
  );
}
export default Position;
