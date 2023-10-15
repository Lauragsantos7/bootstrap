function Spacing() {
  return (
    <>
      <h3>Espaçamento</h3>
      {/* p= padding; m=margem 
      pt= padding-top, ml= margin-left... mx= esquerda e direita my= topo e bottom, etc mx-auto=centralizar o conteúdo,  */}
      <div className="container row">
        <div className="col p-0 bg-primary"></div>
        <div className="col p-1 bg-secondary"></div>
        <div className="col p-2 bg-warning"></div>
        <div className="col p-3 bg-success"></div>
        <div className="col p-4 bg-danger"></div>
        <div className="col p-5 bg-dark"></div>
      </div>
      
      
      <div className="container row">
        <div className="col m-0 p-3 bg-primary"></div>
        <div className="col m-1 p-3 bg-secondary"></div>
        <div className="col m-2 p-3 bg-warning"></div>
        <div className="col m-3 p-3 bg-success"></div>
        <div className="col m-4 p-3 bg-danger"></div>
        <div className="col m-5 p-3 bg-dark"></div>
      </div>
    </>
  );
}
export default Spacing;
