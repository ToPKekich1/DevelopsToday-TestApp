import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { Header, HeaderNav, HeaderNavMenu, HeaderNavItem, Main, Logo } from './styles';

interface Props {
    children: JSX.Element[] | JSX.Element;
    title: string;
}

const MainLayout: React.FC<Props> = ({ children, title = 'Next App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header>
                <Link href={'/'}>
                    <Logo>DevelopsToday test app</Logo>
                </Link>
                <HeaderNav>
                    <HeaderNavMenu>
                        <li>
                            <Link href={'/'}>
                                <HeaderNavItem>Home page</HeaderNavItem>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/posts/new'}>
                                <HeaderNavItem>Create Post</HeaderNavItem>
                            </Link>
                        </li>
                    </HeaderNavMenu>
                </HeaderNav>
            </Header>
            <Main>{children}</Main>
        </>
    );
};

export default MainLayout;
