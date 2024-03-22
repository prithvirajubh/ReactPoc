import React from 'react';
import { render } from '@testing-library/react';
import MainWeatherWindow from '../components/WeatherWindow/index';
describe('MainWeatherWindow component', () => {
    it('renders the component with provided props', () => {
        const props = {
            city: 'New York',
            data: {
                icon: '01d',
                temp: 300,
                weather_desc: 'Sunny'
            }
        };

        const { getByText, getByAltText } = render(<MainWeatherWindow {...props} />);

    });
});