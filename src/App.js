import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Header/HeaderPage";
import FooterPage from "./components/Footer/FooterPage";
import LandingPage from "./pages/LandingPage";
import ChefsPage from "./pages/ChefsPage/ChefsPage";
import ChefsDetailsPage from "./pages/ChefDetailPage/ChefsDetailPage";
import BookingFormPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<ChefsPage />} />
        <Route path="/chefs/:id" element={<ChefsDetailsPage />} />
        <Route path="/booking" element={<BookingFormPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
