import styled from "styled-components";

const DateStyle = styled.div`
  color: black;
  width: 5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Tryangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-top: 1vw solid transparent;
  border-bottom: 1vw solid transparent;
  border-left: 1vw solid #555555;
  border-right: 0;
  relative: 5vw;
`;
const BackgroundStyle = styled.div`
  background: rgba(172, 230, 224, 0.7);
  width: 30vw;
  display: flex;
  justify-content: center;
`;

export const Date = () => {
  return (
    <BackgroundStyle>
      <div>
        <DateStyle>
          10.27&nbsp;
          <Tryangle></Tryangle>
          &nbsp;10.29
        </DateStyle>
      </div>
    </BackgroundStyle>
  );
};
