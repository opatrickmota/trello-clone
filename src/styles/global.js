import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 720px){
            font-size: 93.75%; //15px
        }
        @media(max-width: 1080px){
            font-size: 93.75%; //15px
        }
    }

    html, body, #root{
        min-height: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }

    body{
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale;
    }
 
    body, input, button {
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
    :root{
        --primary: #026AA7;
        --secondary: #004066;
        --background: #F4F5F7;
        --light-blue: #EBF4FF;
        --green: #61BD4F;
        --border-radius: 4px;
    }
`;

export default GlobalStyle;