import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import plPL from "./translations/pl-PL";
import enUS from "./translations/en-US";

export const languages = ["en-US", "pl-PL"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: import.meta.env.VITE_DEFAULT_LANGUAGE,
    resources: {
      "en-US": enUS,
      "pl-PL": plPL,
    },
  });

export default i18n;
