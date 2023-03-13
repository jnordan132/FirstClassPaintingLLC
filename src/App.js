import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
