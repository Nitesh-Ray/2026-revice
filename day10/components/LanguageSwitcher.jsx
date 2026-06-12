import { useLanguage } from '../context/LanguageContext';

function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div>
      <p>{t('greeting')}!</p>
      <p>{t('farewell')}!</p>
      <button onClick={toggleLanguage}>
        Switch to {language === 'en' ? 'hindi' : 'English'}
      </button>
    </div>
  );
}

export default LanguageSwitcher;