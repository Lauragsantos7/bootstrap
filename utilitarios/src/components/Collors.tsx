function Collors() {
  return (
    <>
      <h3>Colors</h3>
      <div className="container">
        <p className="text-primary p-3 mb-2 bg-dark">Texto para exibição de cores -Primary</p>
        {/* p = padding. mb = margin-bottom  bg= background */}
        <p className="text-danger">Texto para exibição de cores - Danger</p>
        <p>
          <a href="#" className="text-success">
            {" "}
            Texto para exibição de cores - Success - Link
          </a>
        </p>
        {/* para colorir o link, a classe de cor deve estar dentro da tag 'a' */}
      </div>
    </>
  );
}

export default Collors;
