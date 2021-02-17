import React, { useEffect } from 'react'
import MainContainer from '../../components/MainContainer'
import { useAction } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Post from '../../components/Post/Post'
import Loader from '../../components/Loader'

interface Props {
    id: string | number;
}

const postId = ({id}: Props) => {
    const { currentPost, error, loading } = useTypedSelector(state => state.post)
    const { fetchPost } = useAction()

    useEffect(() => {
        fetchPost(id)
    }, [])

    if(loading){
        return <Loader/>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <MainContainer title={'Post'}>
           {currentPost && 
              <Post
                post={currentPost}
                isWithLink={false}
              />
           }
        </MainContainer>
    )
}

export default postId

export async function getServerSideProps({params}) {
    const id = params.postId
    return {
      props: {id},
    }
}







