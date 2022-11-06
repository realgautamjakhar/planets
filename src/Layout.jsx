import { motion } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import data from "../src/data.json";
import "./App.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
const PlanetsLi = () => {
  return (
    <ul>
      {data.map((planet) => {
        let { name } = planet;
        return (
          <motion.li whileHover={{ scale: 1.2, color: "#242ed6" }} key={name}>
            <NavLink to={`/planet/${name}`}>{name}</NavLink>
          </motion.li>
        );
      })}
    </ul>
  );
};

const Layout = () => {
  const [menu, setmenu] = useState(false);
  function handleMenuClick() {
    setmenu(!menu);
  }

  useEffect(() => {
    const menuElement = document.getElementById("menu");
    if (menu) {
      menuElement.style.setProperty("width", "100%");
    } else {
      menuElement.style.setProperty("width", "0%");
    }
  }, [menu]);
  return (
    <>
      <main>
        <header className="header">
          <h2>
            <NavLink to="/">THEPLANETS</NavLink>
          </h2>
          <section className="default-nav">
            <PlanetsLi />
          </section>
          <button onClick={handleMenuClick} className="menu-btn">
            {<GiHamburgerMenu />}
          </button>
          <section id="menu" className="menu">
            <button onClick={handleMenuClick} className="close-btn">
              {<AiOutlineCloseSquare />}
            </button>
            <PlanetsLi />
          </section>
        </header>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Layout;
