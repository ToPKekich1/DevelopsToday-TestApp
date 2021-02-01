import { combineReducers } from 'redux';
import { BlogReducer } from './blog/reducer';

const rootReducer = combineReducers({
    blog: BlogReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
