import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import "./Mainboard.css";

function Mainboard({ images }) {
  console.log(images);
  return (
    <div>
      <Wrapper>
        {images && images.results.length ? (
          <Container className="mainboard_container">
            {images?.results?.map((image) => (
              <Pin key={image.id} imageUrl={image.urls.full} />
            ))}
          </Container>
        ) : (
          <div>
            <h1>There is No Data</h1>
            <h1>Please Search</h1>
          </div>
        )}
      </Wrapper>
    </div>
  );
}

export default Mainboard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 15px;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
`;
