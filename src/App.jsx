import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import ConfimacaoComprapage from "./Pages/ConfimacaoComprapage";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/confirmacao" element={<ConfimacaoComprapage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
