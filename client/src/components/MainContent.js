import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
height: 27vh;
width: 80vw;
margin: auto;
margin-top: 3em;
`;

const Header = styled.h1`
@import url('./assets/fonts/druidhill-webfont.woff');
font-family: 'druidhill', sans-serif;
text-align: center;
font-size: 12em;
color: black;
`;


const TextContent = () => {
  return (
    <div>
      <Wrapper>
        <Header>Sláinte</Header>
      </Wrapper>
      
    </div>
  )
}

export default TextContent;