/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Signup from './Signup';

describe('signup form', () => {
  test('render signup form with a button', async () => {
    //Arrange
    render(<Signup />);

    //Assert
    const Signupbutton = await screen.findAllByRole('button');
    expect(Signupbutton).toHaveLength(1);
  });

  test('render firstname input field', () => {
    //Arrange
    const { getByPlaceholderText } = render(<Signup />);
    //ASSERT
    expect(getByPlaceholderText('Enter first name')).toBeInTheDocument;
  });
  test('render lastname input field', () => {
    //Arrange
    const { getByPlaceholderText } = render(<Signup />);
    expect(getByPlaceholderText('Enter Last name')).toBeInTheDocument;
  });
  test('render email input field', () => {
    //Arrange
    const { getByPlaceholderText } = render(<Signup />);
    expect(getByPlaceholderText('Enter your email')).toBeInTheDocument;
  });
  test('render email input field', () => {
    //Arrange
    const { getByPlaceholderText } = render(<Signup />);
    expect(getByPlaceholderText('Enter your password')).toBeInTheDocument;
  });
  test('pass valid email to mail input field', () => {
    //arrange
    render(<Signup />);

    //ACT
    const Inputelement = screen.getByTestId('email-input');
    userEvent.type(Inputelement, 'test@mail.com');

    //Assert
    const errelement = screen.queryByTestId('error-msg');
    expect(errelement).not.toBeInTheDocument();
  });
});
