import { schedules } from "@/db/schedule";

import React from "react";

import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const sorted_schdule = schedules.sort((a, b) => {
  return a.startDate.getTime() - b.startDate.getTime();
});

interface Group {
  id: number;
  title: string;
  rightTitle: string;
}

const groups: Group[] = sorted_schdule.map((items, i) => {
  return {
    id: i,
    title: items.place,
    rightTitle: items.title,
  };
});

interface TimelineData {
  id: number;
  group: number;
  title: string;
  start_time: number; //start_timeとend_timeはプロパティ名固定
  end_time: number;
}

const timeline_data: TimelineData[] = sorted_schdule.map((item, i) => {
  const fixed_start_date = new Date(
    item.startDate.setMonth(item.startDate.getMonth() - 1),
  );
  const fixed_end_date = new Date(
    item.endDate.setMonth(item.endDate.getMonth() - 1),
  );
  const epoch_start_date = fixed_start_date.getTime();
  const epoch_end_date = fixed_end_date.getTime();
  const epoch_diff = epoch_end_date - epoch_start_date;
  return {
    id: i,
    group: i,
    title: item.title,
    start_time: moment(epoch_start_date).valueOf(),
    end_time: moment(epoch_start_date + epoch_diff).valueOf(),
  };
});

export const Schedule = () => {
  console.log(timeline_data);
  return (
    <div>
      Rendered by react!
      <Timeline
        groups={groups}
        items={timeline_data}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
};
