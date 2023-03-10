import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <br /> */}
      <Services />
    </div>
  );
}

export default App;
