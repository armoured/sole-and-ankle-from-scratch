import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../constants';
import SuperHeader from './SuperHeader';

const Header = () => {

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Side>
                    <Logo>Sole&#38;Ankle</Logo>
                </Side>
                <Nav>
                    <NavLink href="/sale" active={true}>Sale</NavLink>
                    <NavLink href="/releases" >New&nbsp;Releases</NavLink>
                    <NavLink href="/men" >Men</NavLink>
                    <NavLink href="/women" >Women</NavLink>
                    <NavLink href="/kids" >Kids</NavLink>
                    <NavLink href="/collections" >Collections</NavLink>
                </Nav>
                <Side />
            </MainHeader>
        </header>
    );
}
const MainHeader = styled.div`
    height: 72px;
    border: 1px solid ${COLORS.gray[300]};
    background: ${COLORS.white};
    padding: 20px 32px;
    display: flex;
    align-items: baseline;
`;

const Logo = styled.div`
    font-weight: ${WEIGHTS.bold};
    font-size: ${24/16}rem;
    line-height: ${28/16}rem;
    color: ${COLORS.gray[900]};
`;

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    margin: 0 48px;
`;

const Side = styled.div`
    flex: 1;
`;

const NavLink = styled.a`
    font-weight: ${WEIGHTS.medium};
    font-size: ${18/16}rem;
    line-height: ${21/16}rem;
    text-transform: uppercase;
    color: ${COLORS.gray[900]};

    ${p => p.active === true && `
        color: ${COLORS.secondary};
    `}

    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export default Header;