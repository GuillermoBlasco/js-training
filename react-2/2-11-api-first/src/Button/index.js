import React from "react";
import './Button.css';
import {ThemeContext, useTheme} from "../ThemeContext";

const computeClass = (theme) => {
  if (theme === 0) {
    return "PrevPageBlack";
  }
  if (theme === 1) {
    return "PrevPageWhite";
  }
  return "PrevPagePink";
}

export const Button = ({ children, onClick}) => {
  const theme = useTheme();
  return <button className={computeClass(theme)} onClick={onClick}>{children}</button>;
}
