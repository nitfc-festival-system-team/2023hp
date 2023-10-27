import { NoticeType } from "@/types/notice";

export const notices: NoticeType[] = [
  {
    title: `本館正面入り口にて献血を行っております。\nご協力お願いします。`,
    url: "/notice-pdfs/blood_donation.pdf",
    date: new Date(2023, 10, 27),
  },
  {
    label: "breaking",
    title: `荒天により、露店を15時まで一次中止します。`,
    url: "",
    date: new Date(2023, 10, 27),
  },
  {
    title: `15:00から露店再開!`,
    url: "",
    date: new Date(2023, 10, 27, 13, 55),
  },
  {
    title: "高専祭の模様を生配信中！",
    url: "https://www.youtube.com/watch?v=rycGE3Kkr9k",
    date: new Date(2023, 10, 27),
  },
  {
    title: "MMCの次のバンドは17:30からです",
    date: new Date(2023, 10, 27),
  },
];
