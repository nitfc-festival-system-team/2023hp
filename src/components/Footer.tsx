import React from "react";
import { useRouter } from "next/router";

import { LinkedText } from "./LinkedText";
import "@/styles/gamingColor.css";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <div
        style={{
          backgroundColor: "#20e0e0",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          fontSize: "1.4vw",
          marginTop: "5vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5vw",
            fontSize: "2vw",
          }}
        >
          <LinkedText text={"企画"} link={"contents/schedule"} />
          <LinkedText text={"露店"} link={"contents/stand"} />
        </div>
        <img
          src={"image/nitfc.png"}
          alt={"nitfc_logo"}
          width={"20%"}
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("https://www.fukui-nct.ac.jp/");
          }}
        />
        {/* <LinkedText text={"福井高専"} link={"https://www.fukui-nct.ac.jp/"} /> */}
        <LinkedText
          text={"お問い合わせ"}
          link={"https://www.fukui-nct.ac.jp/"}
        />
        <div style={{ animation: "rainbow 1s infinite" }}>
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
