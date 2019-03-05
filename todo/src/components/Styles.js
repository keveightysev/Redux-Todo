import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    @import url('https://fonts.googleapis.com/css?family=Ubuntu');

    html {
        font-size: 62.5%;
        font-family: 'Ubuntu', sans-serif;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    body {
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, red, blue);
    }

    h1 {
        color: white;
        font-size: 3rem;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const TaskListCont = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
`;

export const Lists = styled.section`
    width: 45%;

    h2 {
        color: white;
        font-size: 2rem;
        margin-bottom: 0;

        span {
            cursor: pointer;
            color: red;
            margin: 0;
            font-size: 1.4rem;
            font-style: italic;
            font-weight: 300;
        }
    }    
`;

export const TaskCont = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid white;

    p {
        font-size: 1.6rem;
        width: 90%;

        button {
            cursor: pointer;
            color: white;
            border: none;
            background: none;
            font-size: 1.4rem;
            margin-bottom: 5px;
        }

        input {
            font-family: 'Ubuntu', sans-serif;
            color: white;
            background: none;
            border: none;
            border-bottom: 1px solid white;
            font-size: 1.4rem;
            width: 80%;
            height: 30px;

            &:focus {
                outline: 0;
                font-size: 1.4 rem;
                border-bottom: 1px solid black;
            }
        }
    }
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: column;

    button {
        cursor: pointer;
        color: white;
        border: none;
        background: none;
        font-size: 1.4rem;
        margin-bottom: 5px;
    }
`;

export const Form = styled.form`
    width: 90%;
    display: flex;
    justify-content: center;
    margin: 20px 0;

    input {
        background: none;
        border: none;
        border-bottom: 1px solid white;
        width: 40%;
        margin-right: 10px;
        height: 30px;
        color: white;
        font-size: 2.5rem;
        font-family: 'Ubuntu', sans-serif;

        &:focus {
            outline: 0;
            border-bottom: 1px solid black;
        }
    }

    button {
        cursor: pointer;
        background: none;
        border: 1px solid white;
        color: white;
        font-family: 'Ubuntu', sans-serif;
        font-size: 2.5rem;
        padding: 0 20px;

        &:focus {
            outline: 0;
            border: 1px solid black;
        }
    }
`;