import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Carrinho from "./Pages/Carrinho";

import CreatAccontpage from "./Pages/CreatAccontpage";
import ConfimacaoComprapage from "./Pages/ConfimacaoComprapage";
import DetalhesProdutosPage from "./Pages/DetalheProdutoPage";
import CriarContaPage from "./Pages/CriarContaPage";
import Pedidos from "./Pages/Pedidos"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/CreatAccont" element={<CreatAccontpage/>} />
          <Route path="/confirmacao" element={<ConfimacaoComprapage />} />
          <Route path="/criarConta" element={<CriarContaPage />} />
          <Route path="/produtos" element={<DetalhesProdutosPage />} />
          <Route path="/pedidos" element={<Pedidos/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
