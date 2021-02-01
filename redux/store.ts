import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
);

export default store;
