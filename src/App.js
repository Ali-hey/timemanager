import React, { useState } from "react";
import Content from "./content";
import Sidebar from "./sidebar";
import { MainContext } from "./contexts/MainContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <MainContext.Provider value={{ showMenu, setShowMenu }}>
          <Content />
          <Sidebar />
        </MainContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
