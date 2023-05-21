import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ItemLang, ListLang } from "./style";

const LanguageSwitcher = ({ onChange }) => {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];

  const languageNames = useMemo(() => {
    return new Intl.DisplayNames([currentLanguage], {
      type: "language",
    });
  }, [currentLanguage]);

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

