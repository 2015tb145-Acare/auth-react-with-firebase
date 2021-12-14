import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";

function App() {
  return (
    <>
      <Navbar />
      <SignUpModal />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
