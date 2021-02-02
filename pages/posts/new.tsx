import React from 'react';
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm';
import MainLayout from '../../components/MainLayout/MainLayout';

const NewPost: React.FC = () => {
    const mainLayaouProps = {
        title: 'Create post',
    };

    return (
        <MainLayout {...mainLayaouProps}>
            <CreatePostForm />
        </MainLayout>
    );
};

export default NewPost;
