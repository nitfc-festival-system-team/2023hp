import { useRouter } from "next/router";

import { NoticeType } from "@/types/notice";
import { notices } from "@/db/notice";

export const NoticeList = () => {
  return (
    <>
      {notices.map((notice: NoticeType, index) => {
        return <NoticeItem key={index} notice={notice} />;
      })}
    </>
  );
};

const NoticeItem = ({ notice }: { notice: NoticeType }) => {
  const router = useRouter();
  const date = notice.date.getMonth() + "/" + notice.date.getDay();

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
        gap: "25px",
      }}
    >
      <div>{date}</div>
      <div>{"  " + notice.title}</div>
      <div onClick={handleNoticeClick} style={{ cursor: "pointer" }}>
        {"[link]"}
      </div>
    </div>
  );
};
