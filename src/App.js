import { createContext } from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export const searchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className='wrapper'>
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </searchContext.Provider>
    </div>
  );
}

export default App;
