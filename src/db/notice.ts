import { NoticeType } from "@/types/notice";

export const notices: NoticeType[] = [
  {
    title: `本館正面入り口にて献血を行っております。\nご協力お願いします。`,
    url: "/notioce-pdfs/blood_donation.pdf",
    date: new Date(2023, 10, 27),
  },
  {
    title: `雷注意発生に伴い、露店を一時中止しています。`,
    url: "",
    date: new Date(2023, 10, 27, 13, 41),
  },
];
