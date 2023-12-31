import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { TodoWrapper } from "./Components/Todo/TodoWrapper";
import Profile from "./Components/Profile/Profile";



function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <TodoWrapper /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
