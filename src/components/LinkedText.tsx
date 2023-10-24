export const LinkedText = (props: {
  fontSize?: number;
  text: string;
  link: string;
}) => {
  return (
    <a
      href={props.link}
      style={{
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: `${props.fontSize}vw`,
      }}
    >
      {props.text}
    </a>
  );
};
