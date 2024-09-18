import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "../Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => navigate("/")} />
      <span onClick={() => toggleTheme()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
