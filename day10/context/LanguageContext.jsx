import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be inside LanguageProvider');
  return context;
};

const translations = {
  en: { greeting: 'Hello', farewell: 'Goodbye' },
  es: { greeting: 'Hola', farewell: 'Adiós' },
  in: { greeting: 'हा', farewell: 'जा' },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'in' : 'en'));
  };

  const t = (key) => translations[language][key] || key;

  const value = { language, toggleLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext