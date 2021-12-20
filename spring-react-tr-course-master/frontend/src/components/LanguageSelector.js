import React from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = props => {
  const { i18n } = useTranslation();

  const onChangeLanguage = language => {
    i18n.changeLanguage(language);
    changeLanguage(language);
  };

  return (

    <div className="container"><br></br>
      <img
        src="https://cdn.countryflags.com/thumbs/turkey/flag-square-500.png" height="40px" weight="50px"
        alt="Turkish Flag"
        onClick={() => onChangeLanguage('tr')}
        style={{ cursor: 'pointer' }}
      ></img>
      <img src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" height="40px" weight="20px" alt="USA Flag" onClick={() => onChangeLanguage('en')} style={{ cursor: 'pointer' }}></img>
    </div>
  );
};

export default LanguageSelector;
