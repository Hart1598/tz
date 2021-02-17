import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import MainContainer from '../components/MainContainer'
import Post from '../components/Post/Post'
import { useAction } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const index:React.FC = () => {
    const {posts, error, loading} = useTypedSelector(state => state.post)
    const {fetchPosts} = useAction()

    useEffect(() => {
        fetchPosts()
    }, [])

    if(loading){
        return <Loader/>
    }

    if(error){
        return <h1>{error}</h1>
    }


    return (
        <MainContainer title={'Posts'}>
            {posts.map((post) =>
                post.title &&
                <Post 
                    key={post.id}
                    post={post}
                    isWithLink={true}
                />
            )}
        </MainContainer>
    )
}

export default index