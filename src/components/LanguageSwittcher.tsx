import i18n, { DEFAULT_LANGUAGE, languages } from "@services/i18n/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <select
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value)}
    >
      {languages.map((lang, i) => (
        <option key={i} value={lang}>
          {t("LanguageSwitcher." + lang)}
        </option>
      ))}
    </select>
  );
}
