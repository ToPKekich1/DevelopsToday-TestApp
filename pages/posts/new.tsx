import * as React from 'react';
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm';
import { MainLayout } from '../../components/MainLayout/MainLayout';

const NewPost: React.FC = () => {
    return (
        <MainLayout>
            <CreatePostForm />
        </MainLayout>
    );
};

export default NewPost;
