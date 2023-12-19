import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import Login from '../pages/login';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  push: jest.fn(),
};

(useRouter as jest.Mock).mockReturnValue(mockRouter);

describe('Login Component', () => {
  it('should handle login and show error on invalid credentials', async () => {
    render(<Login />);

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ message: 'Invalid credentials' }),
    });

    // Fill in the form fields
    userEvent.type(screen.getByPlaceholderText('Username'), 'kminchelle');
    userEvent.type(screen.getByPlaceholderText('Password'), '0lelplR');

    // Click the login button
    userEvent.click(screen.getByText('Log in'));

    // Wait for the asynchronous operations to complete
    await act(async () => {
      // Check if the error message is displayed
      expect(await screen.findByRole('alert')).toHaveTextContent('Invalid credentials');

      // Ensure that the router is not redirected on failed login
      expect(mockRouter.push).not.toHaveBeenCalled();
    });
  });

  it('should handle login and redirect on successful login', async () => {
    render(<Login />);

    // Mock the fetch function
    global.fetch = jest.fn().mockImplementation(async (url, options) => {
      const { username, password } = JSON.parse(options.body);

      // Simulate different responses based on credentials
      if (username === 'kminchelle' && password === '0lelplR') {
        return {
          ok: true,
          json: async () => ({ token: 'dummyToken' }),
        };
      } else {
        return {
          ok: false,
          json: async () => ({ message: 'Invalid credentials' }),
        };
      }
    });

    // Fill in the form fields
    userEvent.type(screen.getByPlaceholderText('Username'), 'kminchelle');
    userEvent.type(screen.getByPlaceholderText('Password'), '0lelplR');

    // Click the login button
    userEvent.click(screen.getByText('Log in'));

    // Wait for the asynchronous operations to complete
    await act(async () => {
      // Check if the router is redirected to the home page
      expect(await screen.findByText('token')).toBeInTheDocument();
      expect(mockRouter.push).toHaveBeenCalledWith('/');
    });
  });
});
