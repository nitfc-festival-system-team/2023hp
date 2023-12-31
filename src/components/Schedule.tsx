import React, { useState } from "react";
import "react-calendar-timeline/lib/Timeline.css";
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
  TimelineMarkers,
  CustomMarker,
} from "react-calendar-timeline";

import moment from "moment";

import { ScheduleMoveButton } from "@/components/ScheduleMoveButton";
import { schedules } from "@/db/schedule";
import { useCheckIsMobile } from "@/hooks/checkIsMobile";
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

interface ItemInfo {
  id: number;
  title: string;
}

interface PlaceCounts {
  [key: string]: number;
}

const placeCounts: PlaceCounts = {};

schedules.forEach((schedule) => {
  const place = schedule.place.toLowerCase();
  if (placeCounts[place]) {
    placeCounts[place]++;
  } else {
    placeCounts[place] = 1;
  }
});

const sortedPlaceSchedule = schedules.sort((a, b) => {
  const placeA = a.place.toLowerCase();
  const placeB = b.place.toLowerCase();
  const placeCountA = placeCounts[placeA];
  const placeCountB = placeCounts[placeB];

  // 'place' プロパティが同じ場合、出現回数が多いものを前に配置
  if (placeCountA > placeCountB) {
    return -1; // aをbの前に配置
  }
  if (placeCountA < placeCountB) {
    return 1; // bをaの前に配置
  }

  // 'place' プロパティが同じかつ出現回数も同じ場合、'startDate' プロパティを比較
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
    id: i + 1,
    group: groupId,
    title: item.title,
    start_time: moment(epochStartDate).valueOf(),
    end_time: moment(epochStartDate + epochDiff).valueOf(),
    itemProps: { "date-tip": item.title, style: { fontSize: "11px" } },
  };
});

export const Schedule = () => {
  // 事前レンダリング時の日時とブラウザでレンダリング日時を一致させる。
  const [isMobile, _] = useCheckIsMobile();

  const [selectedItemIds, setSelectedItems] = useState<number[]>([]); // 選択されたアイテムのIDを格納するステート
  const [selectedItemInfo, setSelectedItemInfo] = useState<ItemInfo | null>(
    null,
  );
  const [eventMove, setEventMove] = useState<number>(0);

  // ステートが null の場合にデフォルト値を表示
  if (isMobile === null) {
    return <div style={{ height: "50vh" }}>Loading...</div>;
  }

  //UnixTimeが1月ずれているため9月にする
  const fesStart = new Date(2023, 9, 27, 10, 0);
  const fesEnd = new Date(2023, 9, 29, 21, 0);
  const minTime = fesStart.getTime();
  const maxTime = fesEnd.getTime();

  let prevVisibleTimeStart: number = 0;
  let prevVisibleTimeEnd: number = 0;
  let scrollDirection = 0;

  const handleTimeChange = (
    visibleTimeStart: number,
    visibleTimeEnd: number,
    updateScrollCanvas: (start: number, end: number) => void,
  ) => {
    const scrollSensitivityR = isMobile ? 1.0000001 : 1;
    const scrollSensitivityL = isMobile ? 2 - 1.0000001 : 1;

    if (prevVisibleTimeStart !== 0 && prevVisibleTimeEnd !== 0) {
      if (visibleTimeStart > prevVisibleTimeStart) {
        // 未来方向へスクロール
        scrollDirection = 1;
      } else if (visibleTimeStart < prevVisibleTimeStart) {
        // 過去方向へスクロール
        scrollDirection = -1;
      }
    }

    prevVisibleTimeStart = visibleTimeStart;
    prevVisibleTimeEnd = visibleTimeEnd;

    // スクロールの方向に応じて可視範囲の時間を更新
    if (scrollDirection === 1) {
      // 未来方向へのスクロール
      if (visibleTimeEnd * scrollSensitivityR > maxTime) {
        const diff = visibleTimeEnd - maxTime;
        updateScrollCanvas(visibleTimeStart - diff, maxTime);
      } else {
        updateScrollCanvas(
          visibleTimeStart * scrollSensitivityR,
          visibleTimeEnd * scrollSensitivityR,
        );
        prevVisibleTimeStart = visibleTimeStart * scrollSensitivityR;
        prevVisibleTimeEnd = visibleTimeEnd * scrollSensitivityR;
      }
    } else if (scrollDirection === -1) {
      // 過去方向へのスクロール
      if (visibleTimeStart * scrollSensitivityL < minTime) {
        const diff = minTime - visibleTimeStart * scrollSensitivityL;
        updateScrollCanvas(minTime, visibleTimeEnd + diff);
      } else {
        updateScrollCanvas(
          visibleTimeStart * scrollSensitivityL,
          visibleTimeEnd * scrollSensitivityL,
        );
        prevVisibleTimeStart = visibleTimeStart * scrollSensitivityL;
        prevVisibleTimeEnd = visibleTimeEnd * scrollSensitivityL;
      }
    }
  };

  let fesScope;
  if (eventMove == 0) {
    fesScope =
      moment().valueOf() < new Date(2023, 9, 27, 12, 50).getTime()
        ? isMobile
          ? new Date(2023, 9, 27, 12, 50).getTime()
          : new Date(2023, 9, 27, 13, 0).getTime()
        : moment().valueOf();
  } else if (eventMove == 1) {
    fesScope = isMobile
      ? new Date(2023, 9, 27, 12, 50).getTime()
      : new Date(2023, 9, 27, 13, 0).getTime();
  } else if (eventMove == 2) {
    fesScope = isMobile
      ? new Date(2023, 9, 28, 10, 50).getTime()
      : new Date(2023, 9, 28, 11, 0).getTime();
  } else {
    fesScope = isMobile
      ? new Date(2023, 9, 29, 10, 20).getTime()
      : new Date(2023, 9, 29, 10, 0).getTime();
  }

  const timeline = (
    <Timeline
      key={eventMove} // eventMoveが変更されたときに再レンダリングするためにキーを指定
      groups={scheduleGroup}
      items={timelineData}
      lineHeight={isMobile ? 60 : 80}
      sidebarWidth={isMobile ? 100 : 130}
      canResize={false}
      canMove={false}
      defaultTimeStart={moment(fesScope).add(isMobile ? -0.5 : -2, "hour")}
      defaultTimeEnd={moment(fesScope).add(isMobile ? 0.5 : 2, "hour")}
      minZoom={!isMobile ? 2 * 60 * 60 * 1000 : 0.5 * 60 * 60 * 1000}
      maxZoom={!isMobile ? 24 * 60 * 60 * 1000 : 12 * 60 * 60 * 1000}
      minResizeWidth={100}
      selected={selectedItemIds}
      onItemSelect={(itemId: number) => {
        setSelectedItems([itemId]);
        // アイテムが選択されたときにそのアイテムの情報を取得し、ステートに設定
        const selectedItem = timelineData.find((item) => item.id === itemId);

        if (selectedItem) {
          setSelectedItemInfo(selectedItem);
        }
      }}
      onItemDeselect={() => {
        setSelectedItems([]);
        setSelectedItemInfo(null); // 選択解除時に情報をリセット
      }}
      onTimeChange={handleTimeChange}
    >
      <TimelineMarkers>
        <CustomMarker date={moment().valueOf()}>
          {({ styles }) => {
            const customStyles = {
              ...styles,
              backgroundColor: "red",
              width: "4px",
            };
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={customStyles} />

                <p
                  style={{
                    ...styles,
                    width: "0",
                    left: `${
                      (styles.left as number) ? (styles.left as number) + 5 : 70
                    }px`,
                    top: "-5px",
                  }}
                >
                  now
                </p>
              </div>
            );
          }}
        </CustomMarker>
      </TimelineMarkers>
      <TimelineHeaders>
        <SidebarHeader>
          {({ getRootProps }) => {
            const customStyle = {
              backgroundColor: "var(--secondary-color)",
            };
            return <div {...getRootProps({ style: customStyle })}></div>;
          }}
        </SidebarHeader>
        <DateHeader
          unit="primaryHeader"
          style={{
            backgroundColor: "var(--secondary-color)",
          }}
          labelFormat={"YYYY/MM/DD dddd"}
        />

        <DateHeader unit="hour" labelFormat={"HH:00"} />
      </TimelineHeaders>
    </Timeline>
  );
  return (
    <div>
      <div style={{ height: "5vh" }}>
        <span style={{ color: "red" }}>赤線</span>は現在時刻です
      </div>
      {timeline} {/* Timelineを描画 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "10px",
          paddingTop: "10px",
          gap: isMobile ? "3vw" : "0.7vw",
        }}
      >
        <ScheduleMoveButton
          setState={setEventMove}
          state={1}
          buttonText={"1日目"}
        />
        <ScheduleMoveButton
          setState={setEventMove}
          state={2}
          buttonText={"2日目"}
        />
        <ScheduleMoveButton
          setState={setEventMove}
          state={3}
          buttonText={"3日目"}
        />
      </div>
      {/* 選択されたアイテムの情報を表示 */}
      {selectedItemInfo ? (
        // selectedItemInfoが真の場合の表示内容
        <div style={{ marginLeft: "1rem" }}>
          <h2>{sortedPlaceSchedule[selectedItemInfo.id - 1].title}</h2>
          <p>
            時間:
            {moment(
              sortedPlaceSchedule[selectedItemInfo.id - 1].startDate,
            ).format("MM月DD日HH時mm分")}{" "}
            ～{" "}
            {moment(
              sortedPlaceSchedule[selectedItemInfo.id - 1].endDate,
            ).format("HH時mm分")}
          </p>
          <p>場所:{sortedPlaceSchedule[selectedItemInfo.id - 1].place}</p>
          <p>説明:{sortedPlaceSchedule[selectedItemInfo.id - 1].description}</p>
          {/* 他の情報を表示 */}
        </div>
      ) : (
        // selectedItemInfoが偽の場合の表示内容
        <div style={{ marginLeft: "1rem" }}>
          <h1>
            イベント名をタップで
            <br />
            詳細表示
          </h1>
        </div>
      )}
    </div>
  );
};
