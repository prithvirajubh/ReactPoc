import React from 'react';
import { render } from '@testing-library/react';
import WeatherList from '../components/WeatherBox/index';

describe('WeatherList component', () => {
    it('renders the component with provided props', () => {
        const props = {
            date: '2024-03-21',
            icon: '01d',
            temp: 300
        };

        const { getByText, getByAltText } = render(<WeatherList {...props} />);

    });

});