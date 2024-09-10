import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/en/translation.json";
import sinh from "../i18n/sinh/translation.json";
import tam from "../i18n/tam/translation.json";
import fr from "../i18n/fr/translation.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    sinh: {
      translation: sinh,
    },
    tam: {
      translation: tam,
    },
    fr: {
      translation: fr,
    },
  },
});

export default i18n;
