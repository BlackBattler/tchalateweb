import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MentionLegale from "./pages/MentionLegale";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MentionLegale" element={<MentionLegale />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
