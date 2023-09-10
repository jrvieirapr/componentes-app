import "./App.css";
import Botoes from './components/sections/Botoes.jsx'
import Cards from "./components/sections/Cards";
import CheckRadioSection from "./components/sections/CheckRadio";
import Inputs from "./components/sections/Inputs";

function App() {

  return (
    <div className="App">
      <main>
        {/* <Botoes />
        <Inputs />
        <CheckRadioSection /> */}
        <Cards />
    
      </main>
    </div>
  );
}

export default App;
