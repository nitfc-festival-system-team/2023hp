import { useEffect, useState } from "react";

export const LinkedText = (props: {
  fontSize?: number;
  text: string;
  link: string;
}) => {
  const [absoluteLink, setAbsoluteLink] = useState("");

  useEffect(() => {
    const absolutePath = new URL(props.link, window.location.origin).pathname;
    if (props.link.includes("https://")) {
      setAbsoluteLink(props.link);
    } else {
      setAbsoluteLink(absolutePath);
    }
  }, [props.link]);

  return (
    <a
      href={absoluteLink}
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
