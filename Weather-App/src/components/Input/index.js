import React from 'react';
import { useTranslation } from 'react-i18next';
import './CityInput.css';

const CityInput = (props) => {
  const { t } = useTranslation();
  const onClickHandler = async e => {
    e.persist();
    const eventKeyValue = e.which ? e.which : e.keyCode;
    const city = e.target.value;
    if (eventKeyValue === 13) {
      if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
        e.target.classList.add('loading');

        if (await props.ApiCall(city)) e.target.placeholder = t('placeHolder');
        else e.target.placeholder = t('CityNotFound');
      } else e.target.placeholder = t('validCityName');
      e.target.classList.remove('loading');
      e.target.value = '';
    }
  };

  const style = {
    top: props.city ? '-250px' : '-20px',
    width: '600px',
    display: 'inline-block',
    padding: '10px 0px 10px 30px',
    lineHeight: '120%',
    position: 'relative',
    borderRadius: '20px',
    outline: 'none',
    fontSize: '20px',
    transition: 'all 0.5s ease-out',

  };

  return (
    <input
      className='city-input'
      style={style}
      type='text'
      placeholder={t('placeHolder')}
      onKeyPress={onClickHandler}
    />
  );
}

export default CityInput;