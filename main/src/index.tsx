import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: {
            "body": { fontFamily: null },
            "body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre": { margin: null }
        }
    }
})

function Chakra() {
    return (
        <ChakraProvider theme={theme}>
            <p>...</p>
        </ChakraProvider>
    );
}

ReactDOM.render(
    <Chakra />,
    document.getElementById("root")
);


