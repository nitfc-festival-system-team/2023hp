export const LinkedText = (props: { text: string; link: string }) => {
  return (
    <a
      href={props.link}
      style={{
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
      }}
    >
      {props.text}
    </a>
  );
};
