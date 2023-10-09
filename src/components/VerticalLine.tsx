export const VerticalLine = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "42px",
          top: 0,
          height: "100%",
          width: "1px",
          backgroundColor: "#000",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: "0",
          top: "13%",
          writingMode: "vertical-rl",
          textAlign: "center",
          fontSize: "35px",
        }}
      >
        nitcf festival 2023
      </div>
    </>
  );
};
