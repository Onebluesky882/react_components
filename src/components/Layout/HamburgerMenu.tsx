import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleSubmit = () => {
    setMenuToggle((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const menuElement = document.getElementById("menu-container");
    if (menuElement && !menuElement.contains(e.target as Node)) {
      setMenuToggle(false);
    }
  };
  useEffect(() => {
    if (menuToggle) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuToggle]);

  return (
    <div id="menu-container" style={{ position: "relative" }}>
      <Menu onClick={handleSubmit} size={48} color="yellow" />
      {menuToggle && <MobileMenu />}
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div
      style={{ backgroundColor: "red", width: "100px", position: "absolute" }}
    >
      <nav style={{ zIndex: "1000" }}>
        <Link to={"/"}>Home</Link>
      </nav>
      <nav>
        {" "}
        <Link to={"/user-api"}>User Api</Link>
      </nav>
    </div>
  );
};
export default HamburgerMenu;
