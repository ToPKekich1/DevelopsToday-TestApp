import * as React from 'react';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { GetServerSideProps } from 'next';
import { IPost } from '../../redux/blog/types';
import axios from 'axios';
import Link from 'next/link';
import { ALink } from '../../styles/postPage';

interface PostPageProps {
    post: IPost;
}

const PostPage: React.FC<PostPageProps> = ({ post }: PostPageProps) => {
    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr />
            <p>{post.body}</p>
            <Link href="/">
                <ALink>Back to home</ALink>
            </Link>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const res = await axios.get<IPost>(`${process.env.API_URL}/${query.postId}`);
    const post = res.data;
    return { props: { post } };
};

export default PostPage;
