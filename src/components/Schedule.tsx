import { useEffect, useState } from "react";
import Timeline, { TimelineHeaders } from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

import { ScheduleType } from "@/types/schedule";
import { fetchData, EndpointsType } from "@/features/db";

interface GroupType {
  id: number;
  title: string;
  rightTitle: string;
}

interface TimelineDataType {
  id: number;
  group: number;
  title: string;
  start_time: number;
  end_time: number;
  itemProps?: { [key: string]: string };
}

export const Schedule = () => {
  const [schedules, setSchedule] = useState<ScheduleType[]>([]);

  useEffect(() => {
    fetchData(EndpointsType.schedule).then((data) => {
      console.log(data);
      const newSchedules: ScheduleType[] = data.map((doc: ScheduleType) => ({
        title: doc.title,
        startDate: new Date(doc.startDate),
        endDate: new Date(doc.endDate),
        place: doc.place,
      }));
      setSchedule(newSchedules);
    });
  }, []);

  const sortedPlaceSchedule = schedules.sort((a, b) => {
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
  //placeが重複している要素をまとめた配列
  const uniqueSortedPlaceSchedule: ScheduleType[] = sortedPlaceSchedule.filter(
    (item, i, self) => {
      // 同じ場所を持つアイテムを重複とみなす
      return (
        self.findIndex((otherItem) => otherItem.place === item.place) === i
      );
    },
  );

  const scheduleGroup: GroupType[] = uniqueSortedPlaceSchedule.map(
    (items, i) => {
      return {
        id: i + 1,
        title: items.place,
        rightTitle: items.title,
      };
    },
  );

  const timelineData: TimelineDataType[] = sortedPlaceSchedule.map(
    (item, i) => {
      //constで条件演算子を使いgroupを割り振り
      const before =
        i == 0 ? sortedPlaceSchedule[0] : sortedPlaceSchedule[i - 1];

      let id: number;

      if (before.place == item.place) {
        id = before.group ? before.group : 1;
      } else {
        id = before.group ? before.group + 1 : 1;
      }

      item.group = id;

      //時間修正
      const fixedStartDate = new Date(
        item.startDate.setMonth(item.startDate.getMonth() - 1),
      );
      const fixedEndDate = new Date(
        item.endDate.setMonth(item.endDate.getMonth() - 1),
      );
      const epochStartDate = fixedStartDate.getTime();
      const epochDndDate = fixedEndDate.getTime();
      const epochDiff = epochDndDate - epochStartDate;
      const groupId = item.group != null ? item.group : 1;
      return {
        id: i,
        group: groupId,
        title: item.title,
        start_time: moment(epochStartDate).valueOf(),
        end_time: moment(epochStartDate + epochDiff).valueOf(),
        itemProps: { "date-tip": item.title },
      };
    },
  );
  //UnixTimeが1月ずれているため9月にする
  const fesStart = new Date(2023, 9, 27, 9, 0);
  const fesEnd = new Date(2023, 9, 29, 20, 0);

  const minTime = fesStart.getTime();
  const maxTime = fesEnd.getTime();
  return (
    <div>
      <Timeline
        groups={scheduleGroup}
        items={timelineData}
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
      <TimelineHeaders style={{ width: "100vw" }} />
    </div>
  );
};
