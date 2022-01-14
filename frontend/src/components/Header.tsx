import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import rootState from "recoilState";
import { useRecoilState } from "recoil";
import {
  Pinterest,
  Search,
  Notifications,
  Textsms,
  Face,
  KeyboardArrowDown,
} from "@material-ui/icons";

export type ImageParamsType = {
  query: string;
  per_page: string;
  page?: string;
};
type HeaderPropsType = {
  onSearchSubmit: (params: ImageParamsType) => void;
};
function Header({ onSearchSubmit }: HeaderPropsType) {
  const [searchWord, setSearchWord] = useRecoilState(
    rootState.mainBoard.searchWord
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const params: ImageParamsType = {
        query: searchWord,
        per_page: "10",
      };
      onSearchSubmit(params);
    },
    [onSearchSubmit, searchWord]
  );

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <IconButton>
            <Pinterest />
          </IconButton>
        </LogoWrapper>
        <HomePageButton>
          <Link to="/">Homepage</Link>
        </HomePageButton>
        <FollowingeButton>
          <Link to="/follow">Following</Link>
        </FollowingeButton>

        <SearchWrapper>
          <SearchBarWrapper>
            <IconButton>
              <Search />
            </IconButton>
            <form>
              <input
                type="text"
                onChange={(e) => setSearchWord(e.target.value)}
              />
              <button type="submit" onClick={(e) => onSubmit(e)}></button>
            </form>
          </SearchBarWrapper>
        </SearchWrapper>
        <IconsWrapper>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton>
            <Textsms />
          </IconButton>
          <IconButton>
            <Face />
          </IconButton>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </IconsWrapper>
      </Wrapper>
    </>
  );

  // return (
  //   <>
  //     <div className="flex items-center h-56 pt-12 pr-4 pb-4 pl-16 bg-white text-black">
  //       <div className="text-red-700 text-xl cursor-pointer">
  //         <IconButton>
  //           <Pinterest />
  //         </IconButton>
  //       </div>
  //     </div>
  //     <HomePageButton></HomePageButton>
  //     <FollowingButton></FollowingButton>
  //     <SearchWrapper>
  //       <SearchBarWrapper></SearchBarWrapper>
  //     </SearchWrapper>
  //     <IconsWrapper></IconsWrapper>
  //   </>
  // );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  alian-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomeButtons = styled.div`
  display: flex;
  heigth: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;
const HomePageButton = styled(HomeButtons)`
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

const FollowingeButton = styled(HomeButtons)`
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input: focus {
    outline: none;
  }
`;

const IconsWrapper = styled.div``;
