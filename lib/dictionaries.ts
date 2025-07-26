import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Fallback to 'en' if locale is not supported
  const validLocale = locale in dictionaries ? locale : "en"
  return dictionaries[validLocale as keyof typeof dictionaries]()
}
