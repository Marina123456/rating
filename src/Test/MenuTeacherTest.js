import { render, screen } from '@testing-library/react';
import MenuTeacher from '../Teacher/MenuTeacher';
 
test('Меню педагога существует', () => {
  render(<MenuTeacher />)
  expect(screen.getByLabelText<HTMLSelectElement>('Педагог')).toBeInTheDocument();
});

it('Форма авторизации', () => {
    render(<App />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });