import React from 'react'

import styled from 'styled-components'
import Comments from './Comments'
import Link from 'next/link'
import { Post } from '../../types/post'

const StyledBlock = styled.div`
margin: 20px auto; 

display: flex;
justify-content: center;
flex-direction: column;

width: 600px;
height: 100%;

border: 1px solid #eaeaea;

border-radius: 20px;
`

const StyledTitle = styled.div`
    padding: 10px;

    font-size: 1.5rem;
    color: black;
`

const StyledBody = styled.div`
    padding: 10px;

    font-size: 1rem;
    color: #696969;
`

const StyledA = styled.a`
width: 100%;
text-align: center;

border: none;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;   
padding: 10px 15px;
font-size: 18px;
cursor: pointer;

&:hover{
    color: white;
    background-color: #696969;
}

`
interface Props {
    post: Post,
    isWithLink: boolean
}

const PostBlock = ({post, isWithLink}: Props) => {
    
    return (
        <StyledBlock>
            <StyledTitle>{post.title}</StyledTitle>
            <StyledBody>{post.body}</StyledBody>
            {post.comments && post.comments.length
            ? (
                <Comments  comments={post.comments}/>
            )
            : (
                null
            )
            }
            {isWithLink &&
                <Link href={`/posts/${post.id}`}>
                    <StyledA>Перейти на пост</StyledA>
                </Link>
            }
        </StyledBlock>
    )
}   

export default PostBlock
