import Link from 'next/link';
import React from 'react';
import { PostWrapper } from './styles';

interface PostPageProps {
    id?: number | string;
    title: string;
    body: string;
}

const Post: React.FC<PostPageProps> = ({ id, title, body }: PostPageProps) => {
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
