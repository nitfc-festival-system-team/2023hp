import { schedules } from "@/db/schedule";

import React from "react";

import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const sorted_schdule = schedules.sort((a, b) => {
  return a.startDate.getTime() - b.startDate.getTime();
});

const sorted_place_schedule = schedules.sort((a, b) => {
  // 先に 'place' プロパティを比較
  const placeA = a.place.toLowerCase();
  const placeB = b.place.toLowerCase();

  if (placeA < placeB) {
    return -1; // aをbの前に配置
  }
  if (placeA > placeB) {
    return 1; // bをaの前に配置
  }

  // 'place' プロパティが同じ場合、'startDate' プロパティを比較
  const startDateA = a.startDate.getTime();
  const startDateB = b.startDate.getTime();

  if (startDateA < startDateB) {
    return -1; // aをbの前に配置
  }
  if (startDateA > startDateB) {
    return 1; // bをaの前に配置
  }

  return 0; // 順序を変更しない
});

interface GroupType {
  id: number;
  title: string;
  rightTitle: string;
}

//placeが重複している要素をまとめた配列
const uniqueSortedPlaceSchedule = sorted_place_schedule.filter(
  (item, i, self) => {
    // 同じ場所を持つアイテムを重複とみなす
    return self.findIndex((otherItem) => otherItem.place === item.place) === i;
  },
);

const schedule_group: GroupType[] = uniqueSortedPlaceSchedule.map(
  (items, i) => {
    return {
      id: i + 1,
      title: items.place,
      rightTitle: items.title,
    };
  },
);

interface TimelineDataType {
  id: number;
  group: number;
  title: string;
  start_time: number;
  end_time: number;
  itemProps?: { [key: string]: string };
}

const timeline_data: TimelineDataType[] = sorted_place_schedule.map(
  (item, i) => {
    //constで条件演算子を使いgroupを割り振り
    const before =
      i == 0 ? sorted_place_schedule[0] : sorted_place_schedule[i - 1];
    console.log(before);
    const id =
      before.place == item.place
        ? before.group
          ? before.group
          : 1
        : before.group != null
        ? before.group + 1
        : 1;
    item.group = id;

    //時間修正
    const fixed_start_date = new Date(
      item.startDate.setMonth(item.startDate.getMonth() - 1),
    );
    const fixed_end_date = new Date(
      item.endDate.setMonth(item.endDate.getMonth() - 1),
    );
    const epoch_start_date = fixed_start_date.getTime();
    const epoch_end_date = fixed_end_date.getTime();
    const epoch_diff = epoch_end_date - epoch_start_date;
    const groupId = item.group != null ? item.group : 1;
    console.log(groupId);
    return {
      id: i,
      group: groupId,
      title: item.title,
      start_time: moment(epoch_start_date).valueOf(),
      end_time: moment(epoch_start_date + epoch_diff).valueOf(),
      itemProps: { "date-tip": item.title },
    };
  },
);

export const Schedule = () => {
  console.log(timeline_data);

  //UnixTimeが1月ずれているため9月にする
  const fesStart = new Date(2023, 9, 27, 9, 0);
  const fesEnd = new Date(2023, 9, 29, 21, 0);

  const minTime = fesStart.getTime();
  const maxTime = fesEnd.getTime();
  return (
    <div>
      <Timeline
        groups={schedule_group}
        items={timeline_data}
        sidebarWidth={130}
        canResize={false} //サイズ固定
        canMove={false} //位置固定
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
        minZoom={24 * 60 * 60 * 1000}
        maxZoom={24 * 60 * 60 * 1000}
        onTimeChange={function (
          visibleTimeStart,
          visibleTimeEnd,
          updateScrollCanvas,
        ) {
          if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
            updateScrollCanvas(minTime, maxTime);
          } else if (visibleTimeStart < minTime) {
            updateScrollCanvas(
              minTime,
              minTime + (visibleTimeEnd - visibleTimeStart),
            );
          } else if (visibleTimeEnd > maxTime) {
            updateScrollCanvas(
              maxTime - (visibleTimeEnd - visibleTimeStart),
              maxTime,
            );
          } else {
            updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
          }
        }}
      />
    </div>
  );
};
