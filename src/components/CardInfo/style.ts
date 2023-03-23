import styled from "styled-components";

type Props = {
    avatar_url:string
}


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #2b3566;
    margin-top: 30px;
    border-radius: 10px;

    p {
        max-width: 300px;
        color: #fff;
        text-align: center;
    }

`;

export const Name = styled.h1 `
    color: #FFF;
    font-size: 22px;
    margin: auto;
    display: flex;
    justify-content: center;
`;

export const ContainerLocation = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;


    span:last-child {
        color: #7a8ab7;
        font-weight: bold;
    }

    svg {
        margin-right: 10px;
    }
`;


export const Avatar = styled.div<Props>`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 3px solid #4ed9c8;
    margin-top: 30px;
    margin: auto;
    background-image: url(${Props=>Props.avatar_url});
    background-repeat: no-repeat;
    background-size: cover;
    margin:30px auto 30px;

    `


//SEGUIDORES 

export const ContainerFollowers = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

`;

export const Divisor = styled.div`
    width: 3px;
    background-color: #434d7e;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Followers = styled.div`
    span {
        color: #FFF;
        margin-bottom: 10px;
    }

`;

export const ButtonGreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4ed9c8;
    padding: 5px 10px;
    width: 70px;
    border-radius: 5px;
    color: #FFF;
    font-weight: bold;
    margin-top: 10px;

`;

export const Following = styled.div`
 span {
        color: #FFF;
        margin-bottom: 10px;
    }

`;