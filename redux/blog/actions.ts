import axios from 'axios';
import { ADD_POST, BlogActionTypes, SET_POSTS, IPost } from './types';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../rootReducer';

export const setPosts = (posts: IPost[]): BlogActionTypes => ({
    type: SET_POSTS,
    payload: posts,
});

export const addPost = (post: IPost): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    try {
        await axios.post(`${process.env.API_URL}`, post);
        dispatch({
            type: ADD_POST,
            payload: post,
        });
    } catch (error) {
        console.log(error);
    }
};
