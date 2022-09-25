import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('Renders user info', () => {
	// eslint-disable-next-line react/react-in-jsx-scope
	render(<App />);
	const linkElement = screen.getByText(/Loading.../i);
	// eslint-disable-next-line no-undef
	expect(linkElement).toBeInTheDocument();
});
