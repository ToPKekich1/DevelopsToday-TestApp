import React from 'react';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { IPost } from '../redux/blog/types';
import { useDispatch } from 'react-redux';
import { GetServerSideProps } from 'next';
import { setPosts } from '../redux/blog/actions';
import axios from 'axios';
import Post from '../components/Post/Post';

interface HomePageProps {
    posts: IPost[];
}

const Home: React.FC<HomePageProps> = ({ posts }: HomePageProps) => {
    const dispatch = useDispatch();
    dispatch(setPosts(posts));
    return (
        <MainLayout>
            {posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await axios.get<IPost[]>(`${process.env.API_URL}`);
        const posts = res.data;
        return { props: { posts } };
    } catch (error) {
        console.log(error);
    }
};

export default Home;
