import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import { GetServerSideProps } from 'next';
import { IPost } from '../../redux/blog/types';
import axios from 'axios';
import Link from 'next/link';
import { ALink, PostTitle, PostBody } from '../../styles/styles';

interface PostPageProps {
    post: IPost;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
    const mainLayaouProps = {
        title: `Post ${post.title}`,
    };

    return (
        <MainLayout {...mainLayaouProps}>
            <PostTitle>{post.title}</PostTitle>
            <hr />
            <PostBody>{post.body}</PostBody>
            <Link href="/">
                <ALink>Back to home</ALink>
            </Link>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    try {
        const res = await axios.get<IPost>(`${process.env.API_URL}/${query.postId}`);
        const post = res.data;
        return { props: { post } };
    } catch (error) {
        console.log(error);
    }
};

export default PostPage;
