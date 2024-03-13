import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const themeContext = useTheme();

  const toggleTheme = () => {
    themeContext.toggleTheme();
  };

  return <button onClick={toggleTheme}>Zmień motyw</button>;
}
