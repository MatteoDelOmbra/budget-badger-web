import i18n, { languages } from "@services/i18n/i18n";
import { useTranslation } from "react-i18next";
import { Selector } from "./ui/Selector";

export function LanguageSwitcher() {
  const { t } = useTranslation();

  return (
    <Selector
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {languages.map((lang, i) => (
        <option key={i} value={lang}>
          {t("LanguageSwitcher." + lang)}
        </option>
      ))}
    </Selector>
  );
}
