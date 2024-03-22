import React, { Suspense, useState } from 'react';
import './WeatherPage.css';
import i18n from '../../i18n';
import WeatherWindow from '../../components/WeatherWindow/index';
import CityInput from '../../components/Input/index';
import WeatherList from '../../components/WeatherList/index';
import LocaleContext from '../../LocaleContext';


const WeatherPage = (props) => {
  const [locale, setLocale] = useState(i18n.language);
  const [type, setType] = useState('');
  const [state, setState] = useState({
    city: undefined,
    days: new Array(5)
  });

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const updateState = data => {
    const city = data.city.name;
    const days = [];
    const dayList = getDayList(data);

    for (let i = 0; i < 5; i++) {
      days.push({
        date: data.list[dayList[i]].dt_txt,
        weather_desc: data.list[dayList[i]].weather[0].description,
        icon: data.list[dayList[i]].weather[0].icon,
        temp: data.list[dayList[i]].main.temp,
        weather_type: data.list[dayList[i]].weather[0].main,
      });
    }
    console.log(days)

    setType(data.list[dayList[0]].weather[0].main)
    setState({
      city: city,
      days: days
    });
  };

  const ApiCall = async city => {
    const api_data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`
    ).then(resp => resp.json());

    if (api_data.cod === '200') {
      await updateState(api_data);
      return true;
    } else return false;
  };

  const getDayList = data => {
    let dayList = [];
    dayList.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== '15'
      ) {
        index++;
      }
      dayList.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayList;
  };


  const WeatherLists = () => {
    const weatherLists = state.days.slice(1).map(day => (
      <li>
        <WeatherList {...day} />
      </li>
    ));

    return <ul className='weather-card-list'>{weatherLists}</ul>;
  };



  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div className='weatherApp'>
      <header className={`weatherApp-header ${type}`}>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense>
            <div className='language-master'>
              <label className='language-master--label'>Language Option</label>
              <select value={locale} onChange={handleChange}>
                <option vlaue="en">English</option>
                <option value="fr">French</option>
              </select>
            </div>
            <WeatherWindow data={state.days[0]} city={state.city}>
              <CityInput city={state.city} ApiCall={ApiCall.bind(this)} />
              <WeatherLists />
            </WeatherWindow>
          </Suspense>
        </LocaleContext.Provider>
      </header>
    </div>
  );

}

export default WeatherPage;
