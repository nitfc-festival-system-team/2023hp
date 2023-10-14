import styled from "styled-components";
import { StandList } from "@/components/StandList";

const Title = styled.h1`
  font-size: 6vw; /* 要素のフォントサイズを6vwに変更 */
  padding: 0;
  margin: 0.5em auto; /* 上下のマージンを追加し、左右のマージンを自動で中央に配置 */
  border-bottom: 3px solid #000;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Stand = () => {
  return (
    <CenteredContainer>
      <Title>露店一覧</Title>
      <StandList />
    </CenteredContainer>
  );
};
