import { NoticeType } from "@/types/notice";
import { notices } from "@/db/notice";

const NoticeList = () => {
  return (
    <>
      {notices.map((notice: NoticeType, index) => {
        return <NoticeItem key={index} notice={notice} />;
      })}
    </>
  );
};

const NoticeItem = ({ notice }: { notice: NoticeType }) => {
  const date = notice.date.getMonth() + " " + notice.date.getDay();
  return (
    <>
      <div>{notice.title}</div>
      <div>{date}</div>
    </>
  );
};
