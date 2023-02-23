import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0f112a;
    font-family: 'Roboto', sans-serif;

    h1 {
        color: #fff;
        text-align: center;
    }


`;

export const AreaSearch = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerSearch = styled.form`
    background-color: #2b3566;
    padding: 20px 40px;
    border-radius: 10px;


    h2, p {
        text-align:center;
        color: #FFF;
        margin: 0;
    }

    p {
        color: #828fbf;
    }


    h2 {
        font-size: 18px;
        margin-bottom: 10px;
       
    }

`;


export const SearchArea = styled.div`
     display: flex;
     margin-top: 10px;

     button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #0f112a;
        color: #fff;
        padding: 10px;
        border: none;
        cursor: pointer;
     }

     input {
        outline: none;
        border: none;
        flex: 1;
        padding: 10px;

     }

     span {
        font-size: 15px;
        margin-left: 5px;
     }

`;