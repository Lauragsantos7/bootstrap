import "./App.css";

function App() {
  return (
    <>
      <div className="container icon">
        <img className="icon" src="open-iconic-master/svg/ban.svg" alt="ban" />
        <img className="icon" src="open-iconic-master/svg/arrow-left.svg" />
        <img className="icon" src="open-iconic-master/svg/bolt.svg" />
        <img className="icon" src="open-iconic-master/svg/bluetooth.svg" />
        <button className="btn btn-secundary">
          <img className="icon" src="open-iconic-master/svg/chat.svg" />
        </button>
        <button className="btn btn-primary" aria-hidden="true">
          <span className="oi oi-battery-full"> </span>
        </button>
        <br />
        <button className="btn btn-primary" aria-hidden="true">
          <span className="oi oi-battery-empty"> </span>
        </button>
        <button className="btn btn-primary" aria-hidden="true">
          <span className="oi oi-collapse-down"> </span>
        </button>
        <button className="btn btn-warning" aria-hidden="true">
          <span className="oi oi-warning"> Atenção</span>
        </button>
      </div>
    </>
  );
}

export default App;
