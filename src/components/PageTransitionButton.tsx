import { useRouter } from "next/router";

export const PageTransitionButton = ({
  buttonText,
  nextPage,
}: {
  buttonText: string;
  nextPage: string;
}) => {
  const router = useRouter();

  const buttonStyle = {
    width: "150px",
    height: "70px",
    backgroundColor: "#cccccc",
    color: "black",
    borderRadius: "0.2rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
  };

  return (
    <span
      style={buttonStyle}
      onClick={() => {
        router.push("/contents/" + nextPage);
      }}
    >
      {buttonText}
    </span>
  );
};
