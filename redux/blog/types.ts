export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';

export interface IPost {
    id?: string | number;
    title: string;
    body: string;
}

export interface BlogState {
    posts: IPost[];
}

interface ISetPosts {
    type: typeof SET_POSTS;
    payload: IPost[];
}

interface IAddPost {
    type: typeof ADD_POST;
    payload: IPost;
}

export type BlogActionTypes = ISetPosts | IAddPost;
