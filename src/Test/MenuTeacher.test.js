import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import testState from './store/testState.js';
import MenuTeacher from '../Teacher/MenuTeacher.js';
import {MemoryRouter} from 'react-router-dom';

const mockStore = configureStore([]);
const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe('My Connected React-Redux Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore( testState );
  });

  it('Меню педагога существует', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MenuTeacher />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Основные операции')).toBeInTheDocument();
  });
});