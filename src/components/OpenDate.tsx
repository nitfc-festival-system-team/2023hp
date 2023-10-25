import styled from "styled-components";

const DateStyle = styled.div`
  color: black;
  width: 8vw;
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 3vw;
  padding: 10px;
  text-align: center;
`;

const BackgroundStyle = styled.div`
  background: var(--accent-color);
  width: 30vw;
  height: auto;
  display: flex;
  justify-content: center;
`;

const RightArrowAfter = styled.div`
  position: relative;
  width: 1vw;
  height: 1vw;
  display: flex;
  border-top: 0.5vw solid black;
  border-right: 0.5vw solid black;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
`;

export const OpenDate = () => {
  return (
    <BackgroundStyle>
      <div>
        <DateStyle>
          10.27&nbsp;
          <span>
            <RightArrowAfter />
          </span>
          &nbsp;10.29
        </DateStyle>
      </div>
    </BackgroundStyle>
  );
};
