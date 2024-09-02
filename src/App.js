import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Addproducts from "./pages/Addproducts";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import Phone from "./pages/Phone";
import Navbar from "./component/NavBar/Navbar";
import Pc from "./pages/Pc";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addProducts" element={<Addproducts />} />
          <Route path="/editproduct/:productId" element={<Edit />} />
          <Route path="/showproduct/:productId" element={<Show />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/laptop" element={<Pc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
