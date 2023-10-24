export const LinkedText = (props: { text: string; link: string }) => {
  return (
    <a
      href={props.link}
      style={{
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      {props.text}
    </a>
  );
};
