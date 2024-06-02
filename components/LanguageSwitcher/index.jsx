import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { ItemLang, ListLang } from "./style";
import Head from "next/head";

const LanguageSwitcher = ({ onChange }) => {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];

  const [value, setValue] = useState(i18n.language);

  const switchToLocale = useCallback(
    (locale) => {
      const path = router.asPath;

      return router.push(path, path, { locale });
    },
    [router]
  );

  const languageChanged = useCallback(
    async (locValue) => {
      setValue(locValue);

      if (onChange) {
        onChange(locValue);
      }

      await switchToLocale(locValue);
    },
    [switchToLocale, onChange]
  );

  return (
    <ListLang>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
        />
      </Head>
      {locales.map((locale) => (
        <ItemLang
          key={locale}
          onClick={() => languageChanged(locale)}
          isSelected={value === locale}
          alt={`language ${locale}`}
        >
          <span class={`fi fi-${locale === "en" ? "gb" : locale}`}></span>
        </ItemLang>
      ))}
    </ListLang>
  );
};

export default LanguageSwitcher;

