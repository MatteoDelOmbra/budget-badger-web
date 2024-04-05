import { useTheme } from "./ThemeProvider";
import { Within } from "@theme-toggles/react";

export function ThemeToggle() {
  const themeContext = useTheme();

  return (
    <Within
      toggled={themeContext.getTheme() === "dark"}
      onToggle={() => themeContext.toggleTheme()}
    />
  );
}
