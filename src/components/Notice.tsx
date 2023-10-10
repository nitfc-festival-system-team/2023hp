import styled from "styled-components";
import NoticeScrollableComponent from "./NoticeScrollableComponent";

const Title = styled.h1`
  font-size: 1em;
  padding: 0 em;
  margin: 0.5em 0.5em;
  //coler属性は値が渡されれば値に応じて設定
  color: ${(props) => (props.color ? props.color : "black")};
  border-bottom: 2px solid #000;
`;

const Wrapper = styled.div`
  width: 70vw; /* 画面サイズの横幅の70% */
  height: 30vw;
  margin: 0 0 2em;
  background: #f0f7ff;
  border: dashed 2px #000000; /*点線*/
`;

export const Notice = () => {
  return (
    <div>
      <h2>
        <Title>お知らせ</Title>
        <Wrapper>
          <NoticeScrollableComponent />
        </Wrapper>
      </h2>
    </div>
  );
};
