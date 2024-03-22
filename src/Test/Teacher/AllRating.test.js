import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import testState from './../store/testState.js';
import {MemoryRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

import AllRating from '../../Teacher/AllRating';

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

  it('Список результатов детей', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AllRating />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('ФИО')).toBeInTheDocument();
  });
});