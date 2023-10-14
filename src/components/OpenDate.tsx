import styled from "styled-components";

const DateStyle = styled.div`
  color: black;
  width: 8vw;
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2vw;
  padding: 10px;
  text-align: center;
`;

const BackgroundStyle = styled.div`
  background: rgba(172, 230, 224, 0.7);
  width: 20vw;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const OpenDate = () => {
  return (
    <BackgroundStyle>
      <div>
        <DateStyle>10.27&nbsp;▶&nbsp;10.29</DateStyle>
      </div>
    </BackgroundStyle>
  );
};
