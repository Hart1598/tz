import axios from "axios"
import { Dispatch } from "redux"
import {PostActionsTypes, PostActions} from "../../types/post"


export const fetchPosts = () => {
    return async(dispatch: Dispatch<PostActions>) => {
        try{
            dispatch({type: PostActionsTypes.FETCHING})

            const response = await axios.get('https://simple-blog-api.crew.red/posts')

            dispatch({type:PostActionsTypes.FETCH_POSTS, payload: response.data})
        }
        catch(e){
            dispatch({type: PostActionsTypes.ERROR, payload: 'Произошла ошибка при загрузке постов'})
        }
    }
}

export const fetchPost = (id: number | string) => {
    return async(dispatch: Dispatch<PostActions>) => {
        try{
            dispatch({type: PostActionsTypes.FETCHING})

            const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)

            dispatch({type:PostActionsTypes.FETCH_POST, payload: response.data})
        }
        catch(e){
            dispatch({type: PostActionsTypes.ERROR, payload: 'Произошла ошибка при загрузке поста с id ' + id})
        }
    }
}

export const createPost = (title: string,body: string) => {
    return async(dispatch: Dispatch<PostActions>) => {
        try{
            dispatch({type: PostActionsTypes.FETCHING})

            await axios.post(`https://simple-blog-api.crew.red/posts`, {
                title,
                body
            })

            dispatch({type:PostActionsTypes.CREATE_POST})
        }
        catch(e){
            dispatch({type: PostActionsTypes.ERROR, payload: 'Произошла ошибка при создание поста '})
        }
    }
}
