import Link from 'next/link';
import React from 'react';
import { IPost } from '../../redux/blog/types';
import { PostWrapper } from './styles';

const Post: React.FC<IPost> = ({ id, title, body }: IPost) => {
    return (
        <Link href={`/posts/${id}`} passHref>
            <PostWrapper>
                <h1>{title}</h1>
                <hr />
                <p>{body}</p>
            </PostWrapper>
        </Link>
    );
};

export default Post;
