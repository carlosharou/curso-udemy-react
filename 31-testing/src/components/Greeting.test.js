import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        // Arrange => render component
        render(<Greeting />);
    
        // Actions
        // ... nothing

        // Assert => result expected
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });


    test('renders "good to see" if the button NOT clicked', () => {
        // Arrange => render component
        render(<Greeting />);

        // Actions
        // ... nothing

        // Assert => result expected
        const goodToSeeComponent = screen.getByText('good to see', { exact: false });
        expect(goodToSeeComponent).toBeInTheDocument();
    });


    test('renders "changed" if the button WAS clicked', () => {
        // Arrange => render component
        render(<Greeting />);

        // Actions
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert => result expected
        const changedComponent = screen.getByText('changed', { exact: false });
        expect(changedComponent).toBeInTheDocument();
    });


    test('does not render "good to see" if the button was clicked', () => {
        // Arrange => render component
        render(<Greeting />);

        // Actions
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert => result expected
        const goodToSeeComponent = screen.queryByText('good to see', { exact: false });
        expect(goodToSeeComponent).toBeNull();
    });
});