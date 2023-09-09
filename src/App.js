import "./App.css";
import Botoes from './components/sections/Botoes.jsx'
import CheckRadioSection from "./components/sections/CheckRadio";
import Inputs from "./components/sections/Inputs";

function App() {

  return (
    <div className="App">
      <main>
        <Botoes />
        <Inputs />
        <CheckRadioSection />
      </main>
    </div>
  );
}

export default App;
