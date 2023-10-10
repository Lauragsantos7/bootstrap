function Text() {
  return (
    <>
      <h3>Alinhamento de texto</h3>
      <div className="container">
        <div className="col-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quam non placeat officiis nihil perspiciatis vitae in obcaecati ad
            eius praesentium, expedita numquam enim cumque quaerat incidunt
            deleniti sapiente. Numquam!
          </p>
        </div>
        <div className="col-6 text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quam non placeat officiis nihil perspiciatis vitae in obcaecati ad
            eius praesentium, expedita numquam enim cumque quaerat incidunt
            deleniti sapiente. Numquam!
          </p>
        </div>
        <div className="col-6 text-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quam non placeat officiis nihil perspiciatis vitae in obcaecati ad
            eius praesentium, expedita numquam enim cumque quaerat incidunt
            deleniti sapiente. Numquam!
          </p>
        </div>
        <p className="col-3 text-truncate">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          {/* depois das 3 clunas, aparece três pontinhos indicando que tem mais texto */}{" "}
        </p>
        <p className="text-lowercase">
          Lorem ipsum dolor . Ea iste molestiae placeat,possimus minima est
          explicabo aspernatur! Quae, maiores accusamus?
        </p>
        <p className="text-uppercase">
          Lorem ipsum dolor . Ea iste molestiae placeat,possimus minima est
          explicabo aspernatur! Quae, maiores accusamus?
        </p>
        <p className="text-capitalize">
          <b>Toda primeira letra maiúscula.</b>
          Lorem ipsum dolor . Ea iste molestiae placeat,possimus minima est
          explicabo aspernatur! Quae, maiores accusamus?
        </p>
        <p className="font-weight-bold">Texto em negrito</p>
        <p className="font-weight-normal">Texto com fonte normal</p>
        <p className="font-italic">Texto em italico</p>

        <h3>Alinhamento Vertical</h3>
        <p>
          Você pode facilmente realizar o alinhamento vertical de elementos no
          Bootstrap tais como: inline, inline-block, inline-table e table. É
          importante saber que o alinhamento vertical afeta apenas os elementos
          inline, inline-block, inline-table e as células da table. As opções
          disponíveis são: .align-baseline, .align-top, .align-middle,
          .align-bottom, .align-text-bottom, e .align-text-top, utiliza conforme
          necessário.
        </p>
        <span className="align-baseline">baseline</span>
        <span className="align-top">top</span>
        <span className="align-middle">middle</span>
        <span className="align-bottom">bottom</span>
        <span className="align-text-top">text-top</span>
        <span className="align-text-bottom">text-bottom</span>
      </div>
    </>
  );
}
export default Text;
