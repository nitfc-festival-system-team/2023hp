import React, { useState } from "react";

export const EventHeader = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleHeader = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
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
                <h2 style={{ margin: 0 }}>イベント名</h2>
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
      <div style={{ marginBottom: "1.25rem" }} />
    </div>
  );
};
