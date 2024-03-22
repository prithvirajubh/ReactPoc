import React from 'react';
import { useTranslation } from 'react-i18next';
import './WeatherWindow.css';

const WeatherWindow = (props) => {
  const { t } = useTranslation();
  const Title = props.city ? null : <h1 className='title'>{t('title')}</h1>;
  return (
    <div className='main'>
      <div className='inner-main'>
        {Title}
        <img
          src={
            props.data
              ? require(`../../Assets/images/${props.data.icon}.png`)
              : require('../../Assets/images/01d.png')
          }
          alt='sun'
          style={{
            visibility: props.city ? 'visible' : 'hidden',
            opacity: props.city ? '1' : '0'
          }}
        />

        <div
          className='today'
          style={{
            visibility: props.city ? 'visible' : 'hidden',
            opacity: props.city ? '1' : '0'
          }}
        >
          <span className='today-title'>{t('today')}</span>
          <h1 className='today-city'>{props.city}</h1>
          <p>
            {t('temperature')}: {props.data ? Math.round(props.data.temp - 273.15) : 0}
            °C
          </p>
          <p>{props.data ? props.data.weather_desc.toLowerCase() : ''}</p>
        </div>
      </div>
      {props.children}
    </div>
  );

}
export default WeatherWindow;