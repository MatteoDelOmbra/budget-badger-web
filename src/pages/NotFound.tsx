import SadBadger from "@assets/sad-badger.jpeg";
import { useTranslation } from "react-i18next";
export function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("NotFound.Info")}</div>
      <img src={SadBadger} alt="Sad Badger" />
    </>
  );
}
