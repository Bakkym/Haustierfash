/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('Renders user info', () => {
<<<<<<< HEAD
    render( < App / > );
    const linkElement = screen.getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
});
=======
	render(<App />);
	const linkElement = screen.getByText(/Loading.../i);
	expect(linkElement).toBeInTheDocument();
});
>>>>>>> 2bebd15e64915bdefba1fa6c0ac2e71192e9f192
