import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { t } = useTranslation();
  const themeContext = useTheme();

  return (
    <button onClick={() => themeContext.toggleTheme()}>
      {t("ThemeToggle.Button")}
    </button>
  );
}
