import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";

import Home from "./pages/Home";
import Private from "./pages/Private";
import Profile from "./pages/Private/profile";

function App() {
  return (
    <>
      <Navbar />
      <SignUpModal />
      <SignInModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
