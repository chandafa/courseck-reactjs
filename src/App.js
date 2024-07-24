import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { Home, SingleCourse, Cart, Courses } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer';
import CheckoutPage from './pages/CheckoutPage'; // Import CheckoutPage
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} /> {/* Tambahkan rute untuk CheckoutPage */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
