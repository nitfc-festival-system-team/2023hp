import React from "react";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { LinkedText } from "./LinkedText";
import "@/styles/gamingColor.css";

const PcFooter = () => {
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
          paddingBottom: "1vw",
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
        {/* <span style={{ fontSize: "2px" }}>
          このサイトはフィクションであり、実際のイベントや組織とは一切関係ありません。全ての情報や内容は架空のものであり、真実性を持ちません。ご了承ください。
        </span> */}
      </div>
    </footer>
  );
};

const MobileFooter = () => {
  const router = useRouter();

  return (
    <footer>
      <div
        style={{
          paddingTop: "4vw",
          backgroundColor: "#20e0e0",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          fontSize: "3.4vw",
          marginTop: "5vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "9vw",
            fontSize: "2vw",
          }}
        >
          <LinkedText fontSize={5.5} text={"企画"} link={"contents/schedule"} />
          <LinkedText fontSize={5.5} text={"露店"} link={"contents/stand"} />
        </div>
        <div style={{ animation: "rainbow 1s infinite" }}>
          <LinkedText
            fontSize={3.5}
            text={"福井高専祭システム班メンバー募集中!!"}
            link={"https://github.com/nitfc-festival-system-team"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4vw",
            fontSize: "2vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={"image/nitfc.png"}
            alt={"nitfc_logo"}
            width={"35%"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("https://www.fukui-nct.ac.jp/");
            }}
          />
          <LinkedText
            fontSize={5}
            text={"GitHub"}
            link={"https://github.com/nitfc-festival-system-team/2023hp"}
          />
        </div>
      </div>
    </footer>
  );
};

export const Footer = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // クライアント側でユーザーエージェント情報を取得
    const userAgent = window.navigator.userAgent;

    const mobile =
      userAgent.includes("iPhone") ||
      userAgent.includes("Android") ||
      userAgent.includes("iPad");

    // isMobile ステートを更新
    setIsMobile(mobile);
  }, []);

  return <>{isMobile ? MobileFooter() : PcFooter()}</>;
};
