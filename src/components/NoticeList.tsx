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
        fontSize: "2.5vw",
      }}
    >
      <div>{date}</div>
      <p>&nbsp;&nbsp;&nbsp;</p>
      <div style={{ whiteSpace: "nowrap" }}>{notice.title}</div>
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
            <img src="/image/gadget24.png" alt="link mark" width="3.5%" />
          </span>
        )}
      </div>
    </div>
  );
};
