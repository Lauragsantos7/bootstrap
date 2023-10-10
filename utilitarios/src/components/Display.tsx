function Display() {
  return (
    <>
      <h3>Display</h3>
      <div className="container">
        <p>
          O Bootstrap inclui suporte para alguns dos valores mais comuns de
          displays, bem como alguns extras para controlar a exibição durante a
          impressão. Você pode usar as classes abaixo para modificar o display:
          <ul className="d-table">
            <li>d-none</li>
            <li>d-inline</li>
            <li>d-inline-block</li>
            <li>d-block</li>
            <li>d-table</li>
            <li>d-table-cell</li>
            <li>d-flex</li>
            <li>d-inline-flex</li>
          </ul>
          Adicione-as para um elemento para modificar sua visualização. Por
          exemplo, veja como você pode usar os utilitários inline, block ou
          inline-block
        </p>
        <div className="d-inline-block bg-warning">d-inline-block</div>
<div className="d-inline-block bg-warning">d-inline-block</div>
      </div>
    </>
  );
}

export default Display;
