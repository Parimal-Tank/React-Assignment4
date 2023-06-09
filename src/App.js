import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import Products from './view/pages/Products'

function App() {
  return (
    <div className="App">
      <Navbars />
      <Products />
    </div>
  );
}

export default App;
