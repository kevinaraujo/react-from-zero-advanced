import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
`;

export const Head = styled.div`
    width: 100%;
    height: 70px;
    background-color: brown;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.a`
    font-size: 25px;
    color: #00FF00;
`;

export const Welcome = styled.h1`
    font-size: ${props => props.size ? `${props.size}px` : '50px'};
    color: ${props => props.color ? `#${props.color}` : '#FF0000'};
`;