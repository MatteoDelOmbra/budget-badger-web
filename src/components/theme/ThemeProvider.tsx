import { DEFAULT_THEME, themes } from "@styles/themes";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

type ThemeContextProps = {
  toggleTheme: Function;
};

const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<DefaultTheme | null>(null);

  const getSavedTheme = () => {
    return localStorage.getItem("theme") ?? DEFAULT_THEME;
  };

  const setNewTheme = (theme: string) => {
    setTheme(themes[theme]);
    localStorage.setItem("theme", theme);
  };

  if (theme === null) {
    const savedTheme = getSavedTheme();
    setNewTheme(savedTheme);
  }

  const toggleTheme = () => {
    const savedTheme = getSavedTheme();
    const newTheme = savedTheme === "light" ? "dark" : "light";
    setNewTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledThemeProvider theme={theme!}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
