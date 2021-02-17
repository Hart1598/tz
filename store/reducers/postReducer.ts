import {PostActions, PostActionsTypes, PostsState} from '../../types/post'

const initialState: PostsState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null
}


export const postReducer = (state = initialState, action: PostActions) : PostsState => {
    switch(action.type){
        case PostActionsTypes.FETCHING:
            return {...state, loading: true}
        case PostActionsTypes.FETCH_POSTS:
            return {...state, posts: action.payload, loading: false}
        case PostActionsTypes.FETCH_POST:
            return {...state, currentPost: action.payload, loading: false}
        case PostActionsTypes.CREATE_POST:
            return {...state, loading: false}
        case PostActionsTypes.ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}