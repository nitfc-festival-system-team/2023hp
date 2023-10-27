import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { notices } from "@/db/notice";
import { NoticeType } from "@/types/notice";

export const NoticeList = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const mobile =
      userAgent.includes("iPhone") ||
      userAgent.includes("Android") ||
      userAgent.includes("iPad");

    setIsMobile(mobile);
  }, []);
  return <>{isMobile ? <MobileNoticeList /> : <PcNoticeList />}</>;
};

const PcNoticeList = () => {
  if (notices.length === 0) {
    return <>現在お知らせはありません</>;
  }
  return (
    <>
      {notices.map((notice: NoticeType, index) => {
        return <NoticeItem fontSize={2} key={index} notice={notice} />;
      })}
    </>
  );
};

const MobileNoticeList = () => {
  if (notices.length === 0) {
    return <>現在お知らせはありません</>;
  }
  return (
    <>
      {notices.map((notice: NoticeType, index) => {
        return <NoticeItem fontSize={6} key={index} notice={notice} />;
      })}
    </>
  );
};

const NoticeItem = ({
  notice,
  fontSize,
}: {
  notice: NoticeType;
  fontSize: number;
}) => {
  const router = useRouter();
  const date = notice.date.getMonth() + "/" + notice.date.getDate();

  const handleNoticeClick = () => {
    if (notice.url) {
      router.push(notice.url);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: `${fontSize}vw`,
      }}
    >
      <div>{date}</div>
      <p>&nbsp;&nbsp;&nbsp;</p>
      <div>
        {notice.title.split("\n").map((t, index) => (
          <div key={index}>{t}</div>
        ))}
      </div>
      <p>&nbsp;&nbsp;</p>
      <div style={{ cursor: "pointer" }}>
        {notice.url && (
          <span
            onClick={handleNoticeClick}
            style={{
              cursor: "pointer",
              filter:
                "invert(8%) sepia(100%) saturate(7044%) hue-rotate(227deg) brightness(100%) contrast(125%)",
            }}
          >
            <img
              src="/image/gadget24.png"
              alt="link mark"
              width={`${fontSize * 2.5}%`}
            />
          </span>
        )}
      </div>
    </div>
  );
};
