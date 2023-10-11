import { schedules } from "@/db/schedule";
import { title } from "process";

import dayjs from "dayjs";
import RcGantt, { enUS } from "rc-gantt";
import React, { useState } from "react";

const now = new Date();

const sorted = schedules.sort((a, b) => {
  return a.startDate.getTime() - b.startDate.getTime();
});

console.log(sorted);

interface Data {
  title: string;
  startDate: string;
  endDate?: string;
}

const data: Data[] = sorted.map((item) => {
  return {
    title: item.title,
    startDate: item.startDate.toDateString(),
    endDate: item.endDate?.toDateString(),
  };
});

export const Schedule = () => {
  console.log(data);
  return (
    <div style={{ width: "100%", height: 500 }}>
      <RcGantt<Data>
        data={data}
        locale={enUS}
        columns={[
          {
            name: "title",
            label: "Custom Title",
            width: 100,
          },
        ]}
        onUpdate={async () => {
          return true;
        }}
      />
    </div>
  );
};
