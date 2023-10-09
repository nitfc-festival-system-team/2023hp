export const VerticalLine = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "3%",
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
          fontSize: "2rem",
        }}
      >
        nitcf festival system team
      </div>
    </>
  );
};
