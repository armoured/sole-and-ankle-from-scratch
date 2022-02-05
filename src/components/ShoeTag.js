import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../constants";

const TEN_MINUTES = 10 * 60 * 1000;

const ShoeTag = ({sale, releaseDate}) => {

    const justReleased = (((Date.now()) - releaseDate) / 1000) < TEN_MINUTES ? true : false;

    const text = sale ? "Sale" : justReleased ? "Just Released!" : "";

    
    return (
        <Wrapper sale={sale} justReleased={justReleased}>
            <Text>{text}</Text>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    ${p => !p.sale && !p.justReleased && 
        `
            display: none;
        `
    }


    background: ${COLORS.secondary};

    ${p => p.sale && 
        `
            background: ${COLORS.primary};
        `
    };

    border-radius: 2px;
    width: fit-content;
    padding: 8px 10px;
`;

const Text = styled.span`
    font-weight: ${WEIGHTS.bold};
    font-size: ${14/16}rem;
    line-height: ${16/16}rem;
    color: ${COLORS.white};
`;

export default ShoeTag;