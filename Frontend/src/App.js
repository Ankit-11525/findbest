import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories.jsx";
import SmartPhoneSearchPage from "./pages/SmartPhoneSearchPage.jsx"
import "./index.css";

import MedicalSeachPage from "./pages/MedicalSeachPage.jsx";
import ClothingSearchPage from "./pages/ClothingSearchPage.jsx";
import GrocerySearchPage from "./pages/GrocerySearchPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search-page/medical" element={<MedicalSeachPage />} />
        <Route path="/search-page/clothing" element={<ClothingSearchPage />} />
        <Route path="/search-page/grocery" element={<GrocerySearchPage />} />
        <Route path="/search-page/smartphone" element={<SmartPhoneSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
