import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

/* -------- HOME PAGE -------- */
function Home() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

/* -------- MAIN APP -------- */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Portfolio */}
        <Route path="/" element={<Home />} />

        {/* Admin Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
