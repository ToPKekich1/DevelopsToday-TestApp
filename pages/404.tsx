import Link from 'next/link';
import MainLayout from '../components/MainLayout/MainLayout';
import React from 'react';
import { ALink, Error } from '../styles/styles';

const ErrorPage: React.FC = () => {
    const mainLayaouProps = {
        title: 'Error 404',
    };

    return (
        <MainLayout {...mainLayaouProps}>
            <Error>Error 404</Error>
            <Link href="/">
                <ALink>Back to home</ALink>
            </Link>
        </MainLayout>
    );
};

export default ErrorPage;
