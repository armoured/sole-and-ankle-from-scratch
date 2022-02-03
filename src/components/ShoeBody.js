import styled from 'styled-components/macro';
import { COLORS, WEIGHTS } from '../constants';

import ShoeSideBar from './ShoeSideBar';
import ShoeList from './ShoeList';

const ShoeBody = () => {

    return (
        <Wrapper>
            <LeftColumn>
                <Breadcrumbs>
                    <BreadcrumbLink href="/">
                        Home /
                    </BreadcrumbLink>
                    <BreadcrumbLink href="/sale">
                        {" "}Sale /
                    </BreadcrumbLink>
                    <BreadcrumbLink href="/sale/shoes">
                        {" "}Shoes
                    </BreadcrumbLink>
                </Breadcrumbs>
                <ShoeSideBar />
            </LeftColumn>
            <MainColumn>
                <Header>
                    <Title>Running</Title>
                    <SelectWrapper>
                        <label>Sort</label>
                        <select>
                            <option value="newest">Newest Releases</option>
                            <option value="price">Price</option>
                        </select>
                    </SelectWrapper>
                </Header>
                <ShoeList />
            </MainColumn>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: baseline;
    gap: 32px;
`;

const Breadcrumbs = styled.div`

`;

const BreadcrumbLink = styled.a`
    font-weight: ${WEIGHTS.normal};
    font-size: ${14/16}rem;
    line-height: ${16/16}rem;
    color: ${COLORS.gray[700]};

    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const LeftColumn = styled.div`
    min-width: 248px;
`;

const MainColumn = styled.div`
    border: 1px solid purple;
    flex: 1;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border: 1px solid red;
`;

const Title = styled.h2`
    font-weight: ${WEIGHTS.medium};
    font-size: ${24/16}rem;
    line-height: ${24/16}rem;
    color: ${COLORS.gray[900]};
`;

const SelectWrapper = styled.div`
    font-size: ${16/16}rem;
    line-height: ${19/16}rem;
`

export default ShoeBody;