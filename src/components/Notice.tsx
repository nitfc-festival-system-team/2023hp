import styled from "styled-components";
import { RefObject, useState, useEffect } from "react";
import NoticeScrollableComponent from "./NoticeScrollableComponent";
const Title = styled.h1`
  font-size: 1em;
  padding: 0 em;
  margin: 0.5em 0.5em;
  //coler属性は値が渡されれば値に応じて設定
  color: ${(props) => (props.color ? props.color : "black")};
  border-bottom: 3px solid #000;
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 2em 0;
  background: #f0f7ff;
  border: dashed 2px #000000; /*点線*/
`;

export const Notice = () => {
  return (
    <div>
      <Wrapper
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Title>お知らせ</Title>
        <NoticeScrollableComponent />
      </Wrapper>
    </div>
  );
};
