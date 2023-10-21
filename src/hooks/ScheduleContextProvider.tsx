import { useState, useEffect } from "react";

import { ScheduleType } from "@/types/schedule";
import { EndpointsType, fetchData } from "@/features/db";

export function ScheduleList(): ScheduleType[] {
  const [schedules, setSchedule] = useState<ScheduleType[]>([]);

  useEffect(() => {
    fetchData(EndpointsType.schedule).then((data) => {
      const newSchedules: ScheduleType[] = data.map(
        (context: ScheduleType) => ({
          title: context.title,
          startDate: new Date(context.startDate),
          endDate: new Date(context.endDate),
          place: context.place,
        }),
      );

      setSchedule(newSchedules);
    });
  }, []);

  return schedules;
}
