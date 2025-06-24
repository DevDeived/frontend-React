import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import DetalhesProdutosPage from "./Pages/DetalheProdutoPage";
import CriarContaPage from "./Pages/CriarContaPage";


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/CreateCount" element={<CriarContaPage />} />
          <Route path="/produtos" element={<DetalhesProdutosPage />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
