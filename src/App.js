import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChefsPage from "./pages/ChefsPage";
import SignUpPage from "./pages/SignUpPage";
import ChefsPage from "./pages/ChefsPage";
import ChefsDetailsPage from "./pages/ChefsDetailPage";
import BookingFormPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chefsPage" element={<ChefsPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/chefs/chef/:id" element={<ChefsDetailsPage />} />
        <Route path="/booking" element={<BookingFormPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
