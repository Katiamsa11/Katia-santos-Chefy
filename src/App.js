import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Header/HeaderPage";
import FooterPage from "./components/Footer/FooterPage";
import LandingPage from "./pages/LandingPage";
import ChefsPage from "./pages/ChefsPage/ChefsPage";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChefsDetailsPage from "./pages/ChefDetailPage/ChefsDetailPage";
import BookingFormPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<ChefsPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/chefs/:id" element={<ChefsDetailsPage />} />
        <Route path="/booking" element={<BookingFormPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
