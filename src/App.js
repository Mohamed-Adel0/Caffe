import "./App.css";
import Footer from "./Components/Footer/Footer";
import FourHome from "./Components/FourHome/FourHome";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import ThreeHome from "./Components/ThreeHome/ThreeHome";
import TwoHome from "./Components/TwoHome/TwoHome";
import { Route, Routes } from "react-router-dom";
import API from "./Components/API/API";
import CardApi from "./Components/CardApi/CardApi";
// import NotFound from "./Components/NotFound/NotFound";
import Espresso from "./Components/ThreeHome/Espressso/Espresso";
import Cappuccino from "./Components/ThreeHome/Cappuccino/Cappuccino";
import American from "./Components/ThreeHome/American/American";
// import FiveHome from "./Components/FiveHome/FiveHome";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="products" element={<API />} />
        <Route path="products/:id" element={<CardApi />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <TwoHome />
      <Routes>
        <Route
          path="/"
          element={<ThreeHome />}
          children={<Route path="/" element={<Espresso />} />}
        />
        <Route
          path="/"
          element={<ThreeHome />}
          children={<Route path="Cappuccino" element={<Cappuccino />} />}
        />
        <Route
          path="/"
          element={<ThreeHome />}
          children={<Route path="American" element={<American />} />}
        />
      </Routes>
      <FourHome />
      <Footer />
    </div>
  );
}

export default App;
