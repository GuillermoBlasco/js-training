import React from 'react';

const THEMES = {
  0: 'black',
  1: 'white',
  2: 'pink',
};

// https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm
export const ThemeContext = React.createContext(0);

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = React.useState(0);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>)
}


export const useTheme =  () => {
  const {theme} = React.useContext(ThemeContext);
  return theme;
}
export const useThemeName = () => {
  const theme = useTheme();
  return THEMES[theme];
}
export const useSetTheme =  () => {
  const {setTheme} = React.useContext(ThemeContext);
  return setTheme;
}
export const useNextTheme = () => {
  const {theme, setTheme} = React.useContext(ThemeContext);
  return () => setTheme((theme + 1 ) % Object.keys(THEMES).length);
}
