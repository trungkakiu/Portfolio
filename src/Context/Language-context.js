import React, { createContext, useState } from "react";
import en from "../LangGuage/EN/En";
import vi from "../LangGuage/VN/Vi";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const dictionary = language === "en" ? en : vi;
    
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ dictionary, changeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
