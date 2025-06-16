import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
