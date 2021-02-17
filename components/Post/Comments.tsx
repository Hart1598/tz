import React from 'react'
import styled from 'styled-components'

const StyledCommentsBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledComment = styled.div`
    padding: 10px;

    font-size: 1rem;
    color: #696969;
`

const Comments = ({comments}) => {
    return (
        <div>
            <hr/>
                <h4 style={{paddingLeft: '10px', margin: 0}}>Комментарии:</h4>
                    {comments.map((comment) => 
                        <StyledCommentsBlock key={comment.id}>
                            <StyledComment>{comment.id}</StyledComment>
                            <StyledComment>{comment.body}</StyledComment>
                        </StyledCommentsBlock>
                    )}
        </div>
    )
}

export default Comments
