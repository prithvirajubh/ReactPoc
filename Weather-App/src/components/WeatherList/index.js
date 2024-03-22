import React from 'react';
import { useTranslation } from 'react-i18next';
import './WeatherList.css';


const WeatherList = (props) => {
  const { t } = useTranslation();

  const getWeekday = date => {
    let weekday = new Array(7);
    weekday[0] = t('sunday');
    weekday[1] = t('monday');
    weekday[2] = t('tuesday');
    weekday[3] = t('wednesday');
    weekday[4] = t('thursday');
    weekday[5] = t('friday');
    weekday[6] = t('saturday');

    return weekday[new Date(date).getDay()];
  };


  return (
    <div className='weather-card'>
      <h1>{props.date ? getWeekday(props.date) : ''}</h1>
      <img
        src={
          props.icon
            ? require(`../../Assets/images/${props.icon}.png`)
            : require('../../Assets/images/01d.png')
        }
        alt='sun'
      />
      <span className='temp'>{Math.round(props.temp - 273.15)}°C</span>
    </div>
  );
}

export default WeatherList;
