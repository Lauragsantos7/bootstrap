import "./App.css";
import Images from "./components/images/Images";
import Tables from "./components/Tables"
import Containers from "./components/Containers"
import Sintaxes from "./components/Sintaxes";
import Alertas from "./components/Alerts";
import Badges from "./components/images/Badges";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
    <Containers />
     <Sintaxes />
    <Images />
    <Tables />
    <Alertas />
    <Badges />
    <Buttons />
    <Cards />
    <Carousel />
    </>
  );
}

export default App;
