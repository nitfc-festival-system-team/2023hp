import React, { useState } from "react";
import { schedules } from "@/db/schedule";

const now = new Date(); //現在時刻を取得

//現在時刻以降で開催されるイベントのうち直近のもの順にソート
const eventSorted = schedules.sort((a, b) => {
  const diffA = a.startDate.getTime() - now.getTime();
  const diffB = b.startDate.getTime() - now.getTime();
  return diffA - diffB;
});

//先頭を取得
const latestEvent = eventSorted[0];

//現在開催中のイベントを取得
const nowHeld = schedules.filter((event) => {
  const startTime = event.startDate.getTime();
  const endTime = event.endDate?.getTime();

  return startTime <= now.getTime() && (!endTime || endTime >= now.getTime());
});

export const EventHeader = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleHeader = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <div
          style={{
            position: "relative",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div style={{ width: "70%" }}>
            <header
              style={{
                width: "100%",
                paddingTop: "0.5rem",
                paddingBottom: "0.2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {!isHidden && (
                <>
                  <h3 style={{ margin: 0 }}>注目！</h3>
                  <h2 style={{ margin: 0 }}>
                    {nowHeld.length === 0
                      ? latestEvent.title
                      : nowHeld[0].title}
                  </h2>
                </>
              )}
            </header>
          </div>
        </div>
        <button
          onClick={toggleHeader}
          style={{
            width: "10%",
            border: "none",
            background: "white",
            cursor: "pointer",
            position: "absolute",
            textAlign: "center",
            right: "4vw",
            borderBottomLeftRadius: "7px",
            borderBottomRightRadius: "7px",
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          {isHidden ? <span>&#x25BC;</span> : <span>&#x25B2;</span>}
        </button>
      </div>
      {!isHidden && <div style={{ paddingBottom: "10vh" }} />}
    </>
  );
};
