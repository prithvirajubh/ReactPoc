import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CityInput from '../components/Input/index';

describe('CityInput component', () => {
    it('calls ApiCall function with entered city name when Enter key is pressed', async () => {
        const mockApiCall = jest.fn();

        const { getByPlaceholderText } = render(<CityInput ApiCall={mockApiCall} />);

        const input = getByPlaceholderText('Enter a City...');
        fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

        expect(mockApiCall).not.toHaveBeenCalled();

        fireEvent.change(input, { target: { value: 'New York' } });
        fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

        expect(mockApiCall).toHaveBeenCalledWith('New York');
    });

    // Add more test cases as needed...
});