export interface Comment{
    id: number;
    postId: number;
    body: string;
}

export interface Post {
    id: number | string;
    title: string;
    body: string;
    comments?: Comment[];
}


export interface PostsState{
    posts: Post[];
    currentPost: Post | null;
    loading: boolean;
    error: null | string;
}

export enum PostActionsTypes{
    FETCHING = "FETCHING",
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POST = 'FETCH_POST',
    CREATE_POST = 'CREATE_POST',
    ERROR = 'ERROR'
}

interface FetchingAction {
    type: PostActionsTypes.FETCHING;
}

interface FetchPostsAction {
    type: PostActionsTypes.FETCH_POSTS;
    payload: Post[];
}

interface FetchPostAction{
    type: PostActionsTypes.FETCH_POST;
    payload: Post;
}

interface CreatePostAction{
    type: PostActionsTypes.CREATE_POST;
}

interface ErrorAction{
    type: PostActionsTypes.ERROR;
    payload: string
}

export type PostActions = FetchingAction | FetchPostsAction | FetchPostAction | CreatePostAction | ErrorAction