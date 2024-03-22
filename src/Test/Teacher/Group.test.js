import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import testState from './../store/testState.js';
import {MemoryRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

import Group from '../../Teacher/Group';

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

  it('Список детей в группе', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Group />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Баллы')).toBeInTheDocument();
  });
});