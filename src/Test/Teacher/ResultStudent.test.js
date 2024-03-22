import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import testState from './../store/testState.js';
import {MemoryRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import ReactRouter  from "react-router-dom";
import ResultStudent from '../../Teacher/ResultStudent';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);
const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
  useParams: jest.fn(),
}));



describe('My Connected React-Redux Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore( testState );
   
  });
  
  it('Результаты детей', () => {
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({id_student:0} );
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ResultStudent id_student={0} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Путь к документу')).toBeInTheDocument();
  });
});