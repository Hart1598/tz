import Input from '../../components/Input/Input'
import React, { useState } from 'react'
import MainContainer from '../../components/MainContainer'
import Flex from '../../components/Flex/Flex'
import Button from '../../components/Buttons/Button'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAction } from '../../hooks/useActions'
import { useRouter } from 'next/router'
import { Alert } from '../../components/Alert'
import Loader from '../../components/Loader'

export default function newPost(){
    const { error, loading } = useTypedSelector(state => state.post)
    const { createPost } = useAction()
    const [title, setTitle] = useState<string>('')
    const [alert, setAlert] = useState<string | null>(null)
    const [description, setDescription] = useState<string>('')
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault()
        createPost(title, description)
        createAlert()
    }

    const createAlert = () => {
        setAlert('Успешно создан пост')
        setTimeout(() => {
            setAlert(null)
            router.push('/')
        }, 5000);
    }

    if(loading){
        return <Loader/>
    }

    if(error){
        setAlert(error)
    }

    return (
        <MainContainer title={'Create Post'}>
            <Flex direction="column" margin="50px 0">
                {alert &&
                    <Alert>{alert}</Alert>
                }
                <form style={{margin: '0 auto'}} onSubmit={submitHandler}>
                    <Input onChange={(e) => setTitle(e.target.value)} placeholder={'Введите название поста'} label="Title"/>
                    <Input onChange={(e) => setDescription(e.target.value)} placeholder={'Введите описание поста'} label="Description"/>
                    <Button type="submit" color="black" outlined border="#696969">Создать</Button>
                </form>
            </Flex>
        </MainContainer>
    )
}
