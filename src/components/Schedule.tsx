import React from "react";
import { useEffect, useState } from "react";
import "react-calendar-timeline/lib/Timeline.css";
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from "react-calendar-timeline";

import moment from "moment";

import { schedules } from "@/db/schedule";
import { ScheduleType } from "@/types/schedule";

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
  itemProps: {
    "date-tip": string;
    style: {
      fontSize: string;
    };
  };
}

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
    return self.findIndex((otherItem) => otherItem.place === item.place) === i;
  },
);

const scheduleGroup: GroupType[] = uniqueSortedPlaceSchedule.map((items, i) => {
  return {
    id: i + 1,
    title: items.place,
    rightTitle: items.title,
  };
});

const timelineData: TimelineDataType[] = sortedPlaceSchedule.map((item, i) => {
  //constで条件演算子を使いgroupを割り振り
  const before = i == 0 ? sortedPlaceSchedule[0] : sortedPlaceSchedule[i - 1];

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
    itemProps: { "date-tip": item.title, style: { fontSize: "11px" } },
  };
});

export const Schedule = () => {
  // 事前レンダリング時の日時とブラウザでレンダリング日時を一致させる。
  // ステートの初期値を null に設定
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // クライアント側でユーザーエージェント情報を取得
    const userAgent = window.navigator.userAgent;

    const mobile =
      userAgent.includes("iPhone") ||
      userAgent.includes("Android") ||
      userAgent.includes("iPad");

    // isMobile ステートを更新
    setIsMobile(mobile);
  }, []);

  // ステートが null の場合にデフォルト値を表示
  if (isMobile === null) {
    return <div style={{ height: "50vh" }}>Loading...</div>;
  }

  const fesScope = isMobile
    ? new Date(2023, 9, 27, 12).getTime()
    : new Date(2023, 9, 27, 21).getTime();

  //UnixTimeが1月ずれているため9月にする
  const fesStart = new Date(2023, 9, 27, 9, 0);
  const fesEnd = new Date(2023, 9, 29, 21, 0);
  const minTime = fesStart.getTime();
  const maxTime = fesEnd.getTime();
  return (
    <div>
      <div style={{ height: "30vh" }}></div>
      <Timeline
        groups={scheduleGroup}
        items={timelineData}
        lineHeight={isMobile ? 40 : 30}
        sidebarWidth={isMobile ? 100 : 130}
        canResize={false} //サイズ固定
        canMove={false} //位置固定
        defaultTimeStart={moment(fesScope).add(isMobile ? -1 : -3, "hour")}
        defaultTimeEnd={moment(fesScope).add(isMobile ? 1 : 3, "hour")}
        minZoom={!isMobile ? 3 * 60 * 60 * 1000 : 0.5 * 60 * 60 * 1000}
        maxZoom={!isMobile ? 24 * 60 * 60 * 1000 : 12 * 60 * 60 * 1000}
        minResizeWidth={100}
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
      >
        <TimelineHeaders>
          <SidebarHeader>
            {({ getRootProps }) => {
              return <div {...getRootProps()}>Left</div>;
            }}
          </SidebarHeader>
          <DateHeader unit="primaryHeader" />
          <DateHeader />
        </TimelineHeaders>
      </Timeline>
    </div>
  );
};
