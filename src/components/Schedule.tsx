import { schedules } from "@/db/schedule";
import { title } from "process";

import React, { useState } from "react";

import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const now = new Date();

const sorted = schedules.sort((a, b) => {
  return a.startDate.getTime() - b.startDate.getTime();
});

console.log(sorted);

const groups = sorted.map((items, i) => {
  return {
    id: i,
    title: items.place,
    rightTitle: items.title,
  };
});

interface Data {
  id: number;
  group: number;
  title: string;
  start_time: moment.Moment; //start_timeとend_timeはプロパティ名固定
  end_time: moment.Moment;
}

const data: Data[] = sorted.map((item, i) => {
  return {
    id: i,
    group: i,
    title: item.title,
    start_time: moment().add(2, "hour"),
    end_time: moment().add(6, "hour"),
  };
});

export const Schedule = () => {
  return (
    <div>
      Rendered by react!
      <Timeline
        groups={groups}
        items={data}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
};
