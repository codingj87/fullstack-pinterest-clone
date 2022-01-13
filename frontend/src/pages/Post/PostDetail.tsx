import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const GET_POST = gql`
  query GetPost($id: Int) {
    getPost(id: $id) {
      title
      image
      contents
      writer
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const ImageComponent = styled.div`
  background-image: url(${(props: { bg: string }) => props.bg});
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-size: cover;
  background-position: center center;
`;
export default function PostDetail() {
  const { postId } = useParams();

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id: parseInt(postId as string) },
  });

  return (
    <>
      <Container>
        <Column>
          <Title>{loading ? "Loading..." : data?.getPost?.title}</Title>
          <>
            <Subtitle>{data?.getPost?.writer}</Subtitle>
            <Description>{data?.getPost?.contents} </Description>
          </>
        </Column>
        {!loading && (
          <ImageComponent bg={data?.getPost?.image}></ImageComponent>
        )}
      </Container>
    </>
  );
}
