// import React from 'react';
// import { shallow } from 'enzyme';
// import CityInput from '../components/Input/index';

// describe('CityInput component', () => {
//     let wrapper;
//     const mockApiCall = jest.fn();

//     beforeEach(() => {
//         wrapper = shallow(<CityInput ApiCall={mockApiCall} />);
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     it('renders input field with placeholder', () => {
//         expect(wrapper.find('.city-input').exists()).toBe(true);
//         expect(wrapper.find('.city-input').prop('placeholder')).toEqual('Enter a City...');
//     });

//     it('calls ApiCall function on pressing enter key', () => {
//         const eventMock = {
//             persist: jest.fn(),
//             target: { value: 'New York' },
//             which: 13,
//             preventDefault: jest.fn(),
//             keyCode: 13,
//         };

//         wrapper.find('.city-input').simulate('keypress', eventMock);
//         expect(mockApiCall).toHaveBeenCalledWith('New York');
//     });

//     it('displays correct placeholder text on invalid city name', () => {
//         const eventMock = {
//             persist: jest.fn(),
//             target: { value: 'InvalidCity123' },
//             which: 13,
//             preventDefault: jest.fn(),
//             keyCode: 13,
//         };

//         wrapper.find('.city-input').simulate('keypress', eventMock);
//         expect(wrapper.find('.city-input').prop('placeholder')).toEqual('Please enter a valid city name...');
//     });

//     // Add more test cases as needed...
// });

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // To use Jest DOM matchers

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