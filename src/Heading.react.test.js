import React from 'react';
import renderer from 'react-test-renderer';
import Heading from './Components/Heading';

test('renders correctly', () => {
    const tree = renderer.create(<Heading />).toJSON();
    expect(tree).toMatchSnapshot();
    });