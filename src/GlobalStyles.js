import { createGlobalStyle } from 'styled-components';
import bg from './assets/images/bg.jpg';

export const GlobalStyles = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image:${({ theme }) => theme.backgroundBody};
}

body {
    font-family: 'Open Sans', Helvetica, sans-serif, arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    background-image: url(${bg});
    background-repeat: repeat;   
}
`;