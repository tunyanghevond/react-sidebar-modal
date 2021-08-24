import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./contex";
const Home = () => {
  const { openSidebare, openMoadal } = useContext(AppContext);

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebare}>
        <FaBars />
      </button>
      <button onClick={openMoadal} className="btn">
        Show modal
      </button>
    </main>
  );
};

export default Home;
