import React, { useContext } from "react";
import { MainContext } from "./contexts/MainContext";
import "../src/style.css";
import { Route, Routes } from "react-router-dom";
import Clock from "./clock/Clock";
import Stopwatch from "./stopwatch/Stopwatch";
import Weather from "./weather/Weather";
import Todo from "./todo/Todo";
import Author from "./author/Author";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="content_section"
      onClick={() => {
        setShowMenu(true);
      }}
    >
      <i
        className="menu_button fas fa-bars text-dark m-2 pointer d-md-none"
        onClick={handleShowMenu}
      ></i>
      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </div>
  );
};

export default Content;
