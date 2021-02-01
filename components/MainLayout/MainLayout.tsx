import Link from 'next/link';
import * as React from 'react';
import { Header, HeaderNav, HeaderNavMenu, HeaderNavItem, Main, Logo } from './styles';

interface Props {
    children: JSX.Element;
}

export const MainLayout: React.FC = ({ children }: Props) => {
    return (
        <>
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
