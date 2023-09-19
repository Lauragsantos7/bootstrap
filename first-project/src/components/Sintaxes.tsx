function Sintaxes() {
  return (
    <>
      <p className="h2">
        Sintaxe de tags
        <small className="text-muted"> Com texto secundário desbotado</small>
      </p>
      <h3 className="display-3">Cabeçalho em display</h3>
      {/* Para dar um destaque maior */}
      <br />
      <p className="lead">Esse é um paragrafo em destaque, usando lead</p>
      <br />
      <p>
        Você pode usar a <mark>marca</mark> para realçar o texto.
      </p>
      <p>
        <del>Esta linha de texto deve ser tratada como texto excluído.</del>
      </p>
      <p>
        <s>Esta linha de texto deve ser tratada como texto não utilizado.</s>
      </p>
      <p>
        <ins>
          Esta linha de texto deve ser tratada como algo além do documento.
        </ins>
      </p>
      <p>
        <u>Esta linha de texto será renderizada como sublinhada</u>
      </p>
      <p>
        <small>Esta linha de texto deve ser tratada como impressão fina.</small>
      </p>
      <p>
        <strong>Esta linha foi processada como texto em negrito.</strong>
      </p>
      <p>
        <em>Esta linha foi processada em um texto itálico.</em>
      </p>
      <br />
      <hr />
      <p>Mostrar abrevições</p>
      <p>
        <abbr title="Brasil">BR</abbr>
      </p>
      <p>
        <abbr title="HyperText Markup Language" className="initialism">
          HTML
        </abbr>
      </p>
      {/* "initialism" para o nome HTML sair um pouco menor */}
      <hr />
      <br />
      <blockquote className="blockquote text-right">
        <p className="mb-0">Texto alinhado à direita</p>
        <footer className="blockquote-footer">
          Uma citação famosa no
          <cite title="Titulo do Código">Título do Código</cite>
        </footer>
      </blockquote>
      {/* Adicione text.rigth para um blockquote com conteúdo alinhado à direita. */}
      <hr />
      <br />
      <p>Listas</p>
      <ul className="list-unstyled">
        <li>Lista sem estilo</li>
        <li>
          classe 'list-unstyled'
          <ul>
            <li>Lista com estilo</li>
            <li>dentro de um segundo ul</li>
          </ul>
        </li>
        <li>volta a ser sem estilo</li>
        <li>saiu do segundo ul</li>
        <li>e voltou ao nível do primeiro</li>
      </ul>
      <hr />
      <ul className="list-inline">
        <li className="list-inline-item">coloca os </li>
        <li className="list-inline-item">varios ítens de uma lista</li>
        <li className="list-inline-item">na mesma linha</li>
      </ul>
      <hr />
      <br />
      <p>Código inline</p>
      <p>
        {" "}
        Por exemplo, <code>&lt;section&gt;</code> envolvido in line
      </p>
      {/* &lt- less than(menor que) &gt- great than(maior que) */}
      <hr />
      <p>use 'pre' para linhas de código</p>
      <pre>
        <code>&lt;p&gt;</code>Texto simples<code>&lt;p&gt;</code>
      </pre>
      <p className="pre-scrollable">para ter rolagrem de scroll lateral</p>
      <hr />
      <p> Variáveis</p>
      <var>y</var> = <var>m</var>
      <var>x</var>+ <var>b</var>
      <hr />
      <p>Inputs do usuário</p>
      <p>
        {" "}
        A tag &lt;kbd&gt; pode ser usada para indicar as{" "}
        <kbd>ações e teclas </kbd>que o devem ser utilizadas pelo usuário
      </p>
      <p>
        A tag &lt;samp&gt; indica o resultado de uma amostra
        <p>
          {" "}
          <samp>Este texto deve ser tratado como exemplo</samp>
        </p>
      </p>
      <hr />
    </>
  );
}

export default Sintaxes;
