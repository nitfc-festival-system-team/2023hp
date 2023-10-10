import styled from "styled-components";
import StandScrollableComponent from "./StandScrollableComponent";

const Title = styled.h1`
  font-size: 2em;
  padding: 0 em;
  margin: 0.5em 0.5em;
  //coler属性は値が渡されれば値に応じて設定
  color: ${(props) => (props.color ? props.color : "black")};
  border-bottom: 3px solid #000;
`;

export const Stand = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Title>露店一覧</Title>
      <StandScrollableComponent />
    </div>
  );
};
