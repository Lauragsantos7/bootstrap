function ProgressBar() {
  return (
    <>
      <h3>Barra de Progresso</h3>
      <div className="container ">
        <div className="col-12">
          <div className="progress mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              0
            </div>
          </div>

          <div className="progress mb-2">
            <div
              className="progress-bar w-25  bg-success progress-bar-striped progress-bar-animated"
            //   progress-bar-striped" para a barra ficar listrada
            // progress-bar-animated - listras animadas
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              25
            </div>
          </div>

          <div className="progress mb-2">
            <div
              className="progress-bar w-50"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              50
            </div>
          </div>

          <div className="progress mb-2">
            <div
              className="progress-bar w-75 bg-warning"
              role="progressbar"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              75
            </div>
          </div>

          <div className="progress mb-2">
            <div
              className="progress-bar w-100 bg-danger"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              100
            </div>
          </div>

          <div className="progress">
            <div
              className="progress-bar w-25 bg-success"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              até 25%
            </div>
            <div
              className="progress-bar w-50 bg-warning"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              de 26 a 75%
            </div>
            <div
              className="progress-bar w-25 bg-danger"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              +75%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
