import { useTranslation } from "react-i18next";

export function Settings() {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("Settings.Info")}</div>
    </>
  );
}
