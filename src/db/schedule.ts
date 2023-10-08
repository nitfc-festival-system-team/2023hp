import { ScheduleType } from "@/types/schedule";

export const notice: ScheduleType[] = [
  {
    title: "イベント1",
    place: "メインステージ",
    startDate: new Date(2023, 10, 27, 9, 0),
  },
  {
    title: "イベント2",
    place: "メインステージ",
    startDate: new Date(2023, 10, 27, 10, 0),
    endDate: new Date(2023, 10, 27, 11, 0),
  },
  {
    title: "イベント3",
    place: "メインステージ",
    startDate: new Date(2023, 10, 27, 11, 0),
    endDate: new Date(2023, 10, 27, 12, 0),
    description: "イベント3の説明",
  },
];
