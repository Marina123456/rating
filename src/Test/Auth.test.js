import { render, screen } from '@testing-library/react';
import Auth from '../Teacher/Auth.js';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import testState from './store/testState.js';
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

  it('Форма авторизации', () => {
    render(
      <Provider store={store}>
        <Auth />
      </Provider>
    );
    expect(screen.getByText('Введите данные для входа')).toBeInTheDocument();
  });
});

