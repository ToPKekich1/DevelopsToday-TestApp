import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    color: #ffffff;
    background-color: #343a40;
    padding: 0 50px;
`;

export const Logo = styled.a`
    font-size: 3em;
    cursor: pointer;
    color: #ffffff;
`;

export const HeaderNav = styled.nav`
    height: 100%;
`;

export const HeaderNavMenu = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
export const HeaderNavItem = styled.a`
    cursor: pointer;
    margin-left: 20px;
    font-size: 1.5em;
    transition: all 0.35s;
    &:hover {
        color: #ece3e3;
    }
`;

export const Main = styled.main`
    padding-top: 10vh;
    margin: 0 50px;
`;
