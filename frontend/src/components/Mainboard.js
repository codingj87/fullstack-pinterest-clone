import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Pin from "./Pin";
import "./Mainboard.css";
import Button from "@mui/material/Button";
import rootState from "recoilState";
import { useRecoilState } from "recoil";

function Mainboard({ onSearchSubmit, images }) {
  console.log(images);
  const [searchWord, setSearchWord] = useRecoilState(
    rootState.mainBoard.searchWord
  );

  // TODO 왜 초기값을 1로 했을 때 onMoreSubmit 에서 setPageCount 가 바로 안될까;;
  const [page, setPage] = useState(2);

  const onMoreSubmit = useCallback(() => {
    console.log("onMoreSubmit");
    console.log("count", page);
    setPage((prev) => prev + 1);
    console.log("count+++++", page);
    const params = {
      query: searchWord,
      per_page: "10",
      page,
    };
    onSearchSubmit(params);
  }, [page, onSearchSubmit]);

  console.log(11111, images);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    console.log("scrollTop", scrollTop);
    console.log("clientHeight", clientHeight);
    console.log("scrollHeight", scrollHeight);

    if (scrollHeight - scrollTop === clientHeight) {
      console.log(2);
      onMoreSubmit();
    }
  };
  return (
    <div>
      <Wrapper onScroll={handleScroll}>
        {images && images.length ? (
          <div>
            <Container className="mainboard_container">
              {images?.map((image) => (
                <Pin key={image?.id} imageUrl={image?.urls?.full} />
              ))}
            </Container>
            <Button
              className="justify-center"
              variant="contained"
              onClick={onMoreSubmit}
            >
              More Photo
            </Button>
          </div>
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

// const Wrapper = styled.div`
//   background-color: white;
//   display: flex;
//   height: 100%;
//   width: 100%;
//   margin-top: 15px;
//   justify-content: center;
// `;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50%px;
  margin: 0 auto;
  overflow: auto;
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
`;
