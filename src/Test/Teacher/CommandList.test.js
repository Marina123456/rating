import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import testState from './../store/testState.js';
import {MemoryRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

import CommandList from '../../CommandList.js';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);
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

  it('Список команд', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CommandList />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Состав команды')).toBeInTheDocument();
  });
});