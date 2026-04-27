import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const style = {
    padding: "20px",
    backgroundColor: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <>
      <div style={style}>
        <h2>Navbar</h2>
        <button onClick={toggleTheme}>
          switch to {theme === "light" ? "Dark" : "light"} Mode
        </button>
      </div>
    </>
  );
};

export default Navbar;
