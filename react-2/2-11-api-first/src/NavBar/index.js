import React from 'react';
import {useNextTheme, useThemeName} from "../ThemeContext";
import {Button} from "../Button";

export const NavBar = () => {
  const themeName = useThemeName();
  const nextTheme = useNextTheme();

  return (<div>
  <Button onClick={nextTheme}>Change The color</Button>
    <span>{themeName}</span>
  </div>);
}
