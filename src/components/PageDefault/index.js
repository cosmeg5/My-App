import React from 'react';
import Menu from '../menu';
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main `
background-color: #00ff00;
color: var(--white);
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
flex: 1;
`;

function PageDefault( { children}) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;