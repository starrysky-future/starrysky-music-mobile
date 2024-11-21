import zh_cn from "./cn_zh.json";
import en_us from "./en_us.json";
import { useState, useEffect, useCallback } from "react";

type TranslateValues = Record<string, string | number | boolean>;

type Langs = keyof Messages;

type Hook = (locale: Langs) => void;

type Message =
  | Record<keyof typeof zh_cn, string>
  | Record<keyof typeof en_us, string>;

type Messages = Record<(typeof langs)[number]["locale"], Message>;

export declare interface I18n {
  locale: Langs;
  fallbackLocale: Langs;
  availableLocales: Langs[];
  messages: Messages;
  message: Message;
  setLanguage: (locale: Langs) => void;
  fillMessage: (message: string, val: TranslateValues) => string;
  getMessage: (key: keyof Message, val?: TranslateValues) => string;
  t: (key: keyof Message, val?: TranslateValues) => string;
}

let locale: Langs = "zh_cn";

let i18n: I18n;

const hookTools = {
  hooks: [] as Hook[],
  add(hook: Hook) {
    this.hooks.push(hook);
  },
  remove(hook: Hook) {
    this.hooks.splice(this.hooks.indexOf(hook), 1);
  },
  update(locale: Parameters<Hook>[0]) {
    for (const hook of this.hooks) hook(locale);
  },
};

const useI18n = () => {
  const [locale, updateLocale] = useState(i18n?.locale ?? "en_us");

  useEffect(() => {
    const hook: Hook = (locale) => {
      updateLocale(locale);
    };
    hookTools.add(hook);
    return () => {
      hookTools.remove(hook);
    };
  }, []);

  return useCallback(
    (key: keyof Message, val?: TranslateValues): string => {
      return i18n?.getMessage(key, val) ?? "";
    },
    [locale]
  );
};

const setLanguage = (lang: Langs) => {
  i18n.setLanguage(lang);
};

const createI18n = (_locale: Langs = locale): I18n => {
  locale = _locale;

  return (i18n = {
    locale,
    fallbackLocale: "zh_cn",
    availableLocales: Object.keys(messages) as Langs[],
    messages,
    message: messages[locale],
    setLanguage(_locale: Langs) {
      this.locale = _locale;
      this.message = messages[_locale];
      hookTools.update(_locale);
    },
    fillMessage(message: string, vals: TranslateValues): string {
      for (const [key, val] of Object.entries(vals)) {
        message = message.replace(new RegExp(`{${key}}`, "g"), String(vals));
      }

      return message;
    },
    getMessage(key: keyof Message, val?: TranslateValues): string {
      let targetMessage =
        this.message[key] ?? this.messages[this.fallbackLocale][key] ?? "";

      return val ? this.fillMessage(targetMessage, val) : targetMessage;
    },
    t(key: keyof Message, val?: TranslateValues): string {
      return this.getMessage(key, val);
    },
  });
};

const langs = [
  {
    name: "简体中文",
    locale: "zh_cn",
    country: "cn",
    fallback: true,
    message: zh_cn,
  },
  {
    name: "English",
    locale: "en_us",
    country: "us",
    fallback: true,
    message: en_us,
  },
];

const langList: Array<{
  name: string;
  locale: (typeof langs)[number]["locale"];
}> = [];

const messages: Messages = {};

langs.forEach((item) => {
  langList.push({
    name: item.name,
    locale: item.locale,
  });
  messages[item.locale] = item.message;
});

export { langList, messages, setLanguage, createI18n, useI18n };

export type { Message, Messages };
