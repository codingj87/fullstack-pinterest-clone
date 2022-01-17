import React from "react";
import styled from "styled-components";

function Pin({ image }) {
  return (
    <Wrapper>
      <Container>
        <img alt={image.alt_description} src={image?.urls?.full} />
      </Container>
    </Wrapper>
  );
}

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  alian-items: center;
  box-sizing: border-box;
sss  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
