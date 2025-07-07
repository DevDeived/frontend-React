import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Carrinho from "./Pages/Carrinho";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
