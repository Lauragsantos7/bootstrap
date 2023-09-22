function Tables() {
  return (
    <>
      <h1>Tables</h1>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className ="table-danger">Laura</td>
                  <td className ="table-dark">Santos</td>
                  <td className ="table-successgi">lauragsantos</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Ana</td>
                  <td>Silva</td>
                  <td>ana_silva</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-inverse"> 
            {/* table-inverse inverte as cores. Pode ser utilizado tbm o 'thead-inverse' para inverter so as cores do cabeçalho, thead-default para listrar de cinza o cabeçalho e table table-striped para toda a tabela listrada, table table-bordered para bordas, table table-hover para marcar a linha ao passar o mouse, table-sm para diminuir o padding.
            Dentro de tr(linha toda) ou th(coluna) é possivel colorir as linhas e colunas com table-danger, table-light, table-dark, table-atention, table-success, etc */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Laura</td>
                  <td>Santos</td>
                  <td>lauragsantos</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Ana</td>
                  <td>Silva</td>
                  <td>ana_silva</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tables;
