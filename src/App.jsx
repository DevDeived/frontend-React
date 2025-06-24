import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import CreatAccont from "./Components/CreatAccont/CreatAccont";
import CreatAccontpage from "./Pages/CreatAccontpage";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/CreatAccont" element={<CreatAccontpage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
