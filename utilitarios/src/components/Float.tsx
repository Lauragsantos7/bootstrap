function Float() {
  return (
    <>
      <h3>Float </h3>
      <p>
        Você pode flutuar um elemento em qualquer breakpoint com uso dos
        utilitários responsivos. Essas classes de utilitário flutuam um elemento
        para a esquerda ou para a direita, ou desativam a flutuação, com base no
        tamanho do viewport atual. Eles usam os mesmos pontos de interrupção do
        viewport como no sistema de grid.
      </p>

      <div className="float-left">Float left on all viewport sizes</div>
      <br />
      <div className="float-right">Float right on all viewport sizes</div>
      <br />
      <div className="float-none">Don't float on all viewport sizes</div>
      <br />

      <div className="float-sm-left">
        Float left on viewports sized SM (small) or wider
      </div>
      <br />
      <div className="float-md-left">
        Float left on viewports sized MD (medium) or wider
      </div>
      <br />
      <div className="float-lg-left">
        Float left on viewports sized LG (large) or wider
      </div>
      <br />
      <div className="float-xl-left">
        Float left on viewports sized XL (extra-large) or wider
      </div>
      <br />

      <p>
          Aqui estão todas as classes de suporte para o float:
          
          .float-left
          .float-right
          .float-none
          .float-sm-left
          .float-sm-right
          .float-sm-none
          .float-md-left
          .float-md-right
          .float-md-none
          .float-lg-left
          .float-lg-right
          .float-lg-none
          .float-xl-left
          .float-xl-right
          .float-xl-none
      </p>
    </>
  );
}
export default Float;
