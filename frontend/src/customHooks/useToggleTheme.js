import { useEffect, useState } from "react";

export const useToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };
  
  return [theme, toggleTheme];
};
