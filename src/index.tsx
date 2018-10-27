import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Action, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { IState, todoReducer } from './store/store';

export type Thunk<TReturnValue = void, TExtraArgument = void, TAction extends Action = Action> = (
	ThunkAction<TReturnValue, IState, TExtraArgument, TAction>
);

// export default function configureStore() {
//   const middleware = applyMiddleware( thunk );
//   const store: Store<IState> = createStore(todoReducer, middleware);
//   // Here the dispatch casting:
//   (store.dispatch as ThunkDispatch<IState, void, AnyAction>)( addTodoThunk );
//   return store;
// }

const store = createStore(todoReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
