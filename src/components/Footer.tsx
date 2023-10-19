import React from "react";

import { LinkedText } from "./LinkedText";
import "@/styles/gamingColor.css";

export const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          fontSize: "1.8vw",
        }}
      >
        <br />
        <br /> <br /> <br /> <br />
        <LinkedText text={"福井高専"} link={"https://www.fukui-nct.ac.jp/"} />
        <LinkedText
          text={"お問い合わせ"}
          link={"https://www.fukui-nct.ac.jp/"}
        />
        <div style={{ animation: "rainbow 3s infinite" }}>
          <LinkedText
            text={"福井高専祭システム班メンバー募集中!!"}
            link={"https://github.com/nitfc-festival-system-team"}
          />
        </div>
        <LinkedText
          text={"GitHub"}
          link={"https://github.com/nitfc-festival-system-team/2023hp"}
        />
        <br />
      </div>
    </footer>
  );
};
