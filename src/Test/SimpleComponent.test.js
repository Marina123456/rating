import { render, screen } from '@testing-library/react';
import SimpleComponent from '../SimpleComponent.js';

it('Простой', () => {
    render(<SimpleComponent />);
    expect(screen.getByText('Простая проверка')).toBeInTheDocument();
  });