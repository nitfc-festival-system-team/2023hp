import styled from "styled-components";
import { StandList } from "@/components/StandList";

const Title = styled.h1`
  font-size: 2em;
  padding: 0 em;
  margin-bottom: 0.5em;
  //coler属性は値が渡されれば値に応じて設定
  color: ${(props) => (props.color ? props.color : "black")};
  border-bottom: 3px solid #000;
`;

// dl要素にスタイルを適用するコンポーネント

export const Stand = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Title style={{ fontSize: "6vw" }}>露店一覧</Title>
      <StandList />
    </div>
  );
};
