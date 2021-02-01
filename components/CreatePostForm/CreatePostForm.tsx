import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/blog/actions';
import { IPost } from '../../redux/blog/types';
import { Form, FormWrapper, InputField, Label, Input, Textarea, Button, NotificationMessage } from './styles';

const CreatePostForm: React.FC = () => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const messageRef = useRef(null);
    const dispatch = useDispatch();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const resBody: IPost = { title, body };
            dispatch(addPost(resBody));
            messageRef.current.innerHTML = 'Post successfully added';
            setTimeout(() => {
                messageRef.current.innerHTML = '';
            }, 1500);
            setTitle('');
            setBody('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormWrapper>
            <NotificationMessage ref={messageRef}></NotificationMessage>
            <Form onSubmit={onSubmitHandler} method="POST" autoComplete="off">
                <InputField>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        name="title"
                        id="title"
                        type="text"
                        value={title}
                        required
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </InputField>
                <hr />
                <InputField>
                    <Label htmlFor="body">Body</Label>
                    <Textarea
                        name="body"
                        id="body"
                        required
                        value={body}
                        onChange={(event) => {
                            setBody(event.target.value);
                        }}
                    />
                </InputField>
                <hr />

                <Button type="submit">Add post</Button>
            </Form>
        </FormWrapper>
    );
};

export default CreatePostForm;
