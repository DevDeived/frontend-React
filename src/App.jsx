import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import CriacaoContaPage from "./Pages/CriarContaPage";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/CreateCount" element={<CriacaoContaPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
