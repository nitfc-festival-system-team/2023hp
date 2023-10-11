import { StandType } from "@/types/stand";
import { stands } from "@/db/stand";

import { useRouter } from "next/router";

export const StandList = () => {
  return (
    <>
      {stands.map((stand: StandType, index) => {
        return <StandItem key={index} stand={stand} />;
      })}
    </>
  );
};

const StandItem = ({ stand }: { stand: StandType }) => {
  const router = useRouter();
  const handleRedirect = () => {
    if (stand.url) {
      router.push(stand.url);
    }
  };

  return (
    <div
      style={{
        width: "50vw",
        height: "18vw",
        borderBottom: "1.3px solid #000",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "start",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "2.5vw" }}>{stand.organizer}</span>
            <span style={{ fontSize: "3.3vw" }}>{stand.name}</span>
            <span style={{ fontSize: "1.7vw" }}>{stand.place}</span>

            {stand.url ? (
              <span
                onClick={handleRedirect}
                style={{
                  cursor: "pointer",
                  filter:
                    "invert(8%) sepia(100%) saturate(7044%) hue-rotate(227deg) brightness(100%) contrast(125%)",
                  marginLeft: "2px",
                  fontSize: "1.5vw",
                }}
              >
                <img
                  src="/image/gadget24.png"
                  alt="link mark"
                  width="3%"
                  height="3%"
                />
                {" 露店リンク"}
              </span>
            ) : null}
          </div>
          <div style={{ marginLeft: "10px" }}>
            {stand.image && (
              <img
                src={stand.image}
                alt="stand image"
                style={{
                  width: "auto",
                  height: "100px",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
