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
  const date = notice.date.getMonth() + "/" + notice.date.getDay();
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
    </div>
  );
};
