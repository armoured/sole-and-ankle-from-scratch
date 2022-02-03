import styled from 'styled-components/macro';
import { COLORS } from '../constants';


const SuperHeader = () => {
    return (
        <Wrapper>
            <MarketingMessage>Free shipping on domestic orders over $75!</MarketingMessage>
            <input placeholder='search'></input>
            <a>Help</a>
            <div>shopping bag icon</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 40px;
    font-size: ${14/16}rem;
    line-height: 1rem;
    background: ${COLORS.gray[900]};
    color: ${COLORS.white};
    padding: 0 32px;
    gap: 24px;

    display: flex;
    align-items: center;
`;

const MarketingMessage = styled.span`
    margin-right: auto;
`;

export default SuperHeader;