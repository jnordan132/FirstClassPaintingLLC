import * as React from "react";
import "./App.css";
import Header from "./components/Header/index.tsx";
import Services from "./components/Services/index.tsx";
import Work from "./components/Work/index.tsx";
import Contact from "./components/Contact/index.tsx";
import Footer from "./components/Footer/index.tsx";

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
