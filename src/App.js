import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Contact from "./components/Contact";
import { SliderData } from "./components/Work/SliderData";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
