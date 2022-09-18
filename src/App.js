import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Header/HeaderPage";
import FooterPage from "./components/Footer/FooterPage";
import HomePage from "./pages/HomePage";
import ChefsPage from "./pages/ChefsPage";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChefsDetailsPage from "./pages/ChefsDetailPage";
import BookingFormPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chefsPage" element={<ChefsPage />} />
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