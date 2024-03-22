import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import testState from './store/testState.js';
import EventList from '../Teacher/EventList.js';
import {MemoryRouter} from 'react-router-dom';
import thunk from 'redux-thunk';


const middlewares = [thunk];

const mockStore = configureStore(middlewares);
const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe('Соединение с компонентом', () => {
  let store;

  beforeEach(() => {
    store = mockStore( testState );
  });

  it('Список мероприятий существует', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EventList />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Название мероприятия')).toBeInTheDocument();
    expect(screen.getByText('Создание нового мероприятия')).toBeInTheDocument();
  });
});