import i18next from 'i18next';
import ICU from 'i18next-icu';
import translations from './translations';
import { initReactI18next } from 'react-i18next';
import en from 'i18next-icu/locale-data/en';

i18next
  .use(
    new ICU({
      localeData: en,
    })
  )
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
