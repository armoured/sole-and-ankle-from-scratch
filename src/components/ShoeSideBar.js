import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../constants";

const categories = [
    {
        name: "Lifestyle",
        href: "/lifestyle"
    },
    {
        name: "Jordan",
        href: "/jordan"
    },
    {
        name: "Running",
        href: "/running",
        active: true
    },
    {
        name: "Basketball",
        href: "/basketball"
    },
    {
        name: "Training & Gym",
        href: "/training"
    },
    {
        name: "Football",
        href: "/football"
    },
    {
        name: "Skateboarding",
        href: "/skateboarding"
    },
    {
        name: "American Football",
        href: "/us-football"
    },
    {
        name: "Baseball",
        href: "/baseball"
    },
    {
        name: "Golf",
        href: "/golf"
    },
    {
        name: "Tennis",
        href: "/tennis"
    },
    {
        name: "Athletics",
        href: "/athletics"
    },
    {
        name: "Walking",
        href: "/walking"
    }
]

const ShoeSideBar = () => {
    return (
        <Wrapper>
            {categories.map(category => 
                <Link href={category.href} active={category.active}>{category.name}</Link>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    border: 1px solid green;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
`;

const Link = styled.a`
    font-weight: ${WEIGHTS.medium};
    font-size: ${16/16}rem;
    line-height: ${32/16}rem;
    color: ${COLORS.gray[900]};

    ${p => p.active && `
        color: ${COLORS.primary};
    `};

    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export default ShoeSideBar;