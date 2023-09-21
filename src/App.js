import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <p>TCHALATE</p>
      </header>
    </div>
=======
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> e8229398090f9fc98ae9bb3e4629860eb0244627
  );
}

export default App;
