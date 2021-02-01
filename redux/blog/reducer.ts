import { BlogState, BlogActionTypes, SET_POSTS, ADD_POST } from './types';

const initialState: BlogState = {
    posts: [],
};

export function BlogReducer(state = initialState, action: BlogActionTypes): BlogState {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.payload],
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        default:
            return state;
    }
}
