import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import ConfimacaoComprapage from "./Pages/ConfimacaoCompra";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/comfimacao" element={<ConfimacaoComprapage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
