import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
