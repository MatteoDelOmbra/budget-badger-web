import { useTheme } from "./ThemeProvider";

export function ThemeSwitcher() {
  const themeContext = useTheme();

  const toggleTheme = () => {
    themeContext.toggleTheme();
  };

  return <button onClick={toggleTheme}>Zmień motyw</button>;
}
