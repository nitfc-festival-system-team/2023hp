import { ScheduleType } from "@/types/schedule";

export const schedules: ScheduleType[] = [
  {
    title: "オープニングセレモニー",
    place: "第1体育館",
    description: "共に輝く！始まる文化の祭典へ！",
    startDate: new Date(2023, 10, 27, 12, 30),
    endDate: new Date(2023, 10, 27, 13, 0),
  },
  {
    title: "気配切り",
    place: "第1体育館",
    description:
      "感覚を研ぎ澄ませ！自分を信じて、いざ一振り！！決着の様子は体育館で",
    startDate: new Date(2023, 10, 27, 13, 20),
    endDate: new Date(2023, 10, 27, 14, 30),
  },
];
