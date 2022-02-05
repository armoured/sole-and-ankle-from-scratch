import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../constants";
import ShoeTag from "./ShoeTag";

const ShoeCard = ({ 
    slug, 
    name,
    imageSrc,
    price,
    salePrice,
    releaseDate,
    numOfColors
}) => {
    

    const onSale = salePrice ? true : false;

    return (
        <Link href={`/shoe/${slug}`}>
            <Wrapper>
                <Image src={imageSrc} />
                <Row>
                    <Name>
                        {name}
                    </Name>
                    <Price sale={onSale}>
                        ${price/ 100}
                    </Price>
                </Row>
                <Row>
                    <Colors>
                        {numOfColors} Colors
                    </Colors>
                    <SalePrice sale={onSale}>
                        ${salePrice/100}
                    </SalePrice>
                </Row>
                <ShoeTagWrapper>
                    <ShoeTag sale={onSale} releaseDate={releaseDate}/>
                </ShoeTagWrapper>
            </Wrapper>
        </Link>
    );
}

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    flex: 1;
    flex-basis: 300px;
    position: relative;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    & ${Row}:first-of-type {
        margin-top: 14px;
    }

    & ${Row}:last-of-type {
        margin-top: 6px;
    }

`;

const Image = styled.img`
    width: 100%;
    border-radius: 16px 16px 4px 4px;
`;

const Name = styled.h3`
    font-weight: ${WEIGHTS.medium};
    font-size: ${16/16}rem;
    line-height: ${19/16}rem;
    color: ${COLORS.gray[900]};
`;

const Price = styled.span`
    font-weight: ${WEIGHTS.medium};
    font-size: ${16/16}rem;
    line-height: ${19/16}rem;
    color: ${COLORS.gray[900]};

    ${p => p.sale && 
        `
            text-decoration: line-through;
            font-weight: ${WEIGHTS.normal};
            color: ${COLORS.gray[700]};
        `
    };

`;

const SalePrice = styled.span`
    ${p => !p.sale && 
        `
            display: none;
        `
    }

    font-weight: ${WEIGHTS.medium};
    font-size: ${16/16}rem;
    line-height: ${19/19}rem;
    color: ${COLORS.primary};
`;

const Colors = styled.span`
    font-weight: ${WEIGHTS.normal};
    font-size: ${16/16}rem;
    line-height: ${19/16}rem;
    color: ${COLORS.gray[700]};
`

const ShoeTagWrapper = styled.div`
    position: absolute;
    top: 12px;
    right: -4px;
`;

export default ShoeCard;