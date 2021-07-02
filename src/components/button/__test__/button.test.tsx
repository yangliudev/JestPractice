import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Button label="Click Me"></Button>, div)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="yang"></Button>)
    expect(getByTestId('button')).toHaveTextContent('yang')
})

