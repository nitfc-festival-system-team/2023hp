import { NoticeType } from "@/types/notice";

export const notices: NoticeType[] = [
  {
    title: `本館正面入り口にて献血を行っております。\nご協力お願いします。`,
    url: "/notioce-pdfs/blood_donation.pdf",
    date: new Date(2023, 10, 27),
  },
  {
    label: "breaking",
    title: `荒天により、露天を15時まで\n一次中止します。`,
    url: "",
    date: new Date(2023, 10, 27),
  },
  {
    title: `15:00から露店再開!`,
    url: "",
    date: new Date(2023, 10, 27, 13, 55),
  },
];
