import styled from "styled-components/macro";

import SHOES from "../data"; 
import ShoeCard from "./ShoeCard";


const ShoeList = () => {
    return (
        <Wrapper>
            {SHOES.map((shoe, idx) => <ShoeCard key={idx} {...shoe}/>)}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
`;

export default ShoeList;