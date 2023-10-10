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
    <div>
      <h2>
        <span
          style={{
            textAlignLast: "justify",
            display: "inline-block",
            width: "70px",
          }}
        >
          {stand.organizer}
        </span>

        {stand.name + ": " + stand.place}
        {stand.url && (
          <span
            onClick={handleRedirect}
            style={{
              cursor: "pointer",
              filter:
                "invert(8%) sepia(100%) saturate(7044%) hue-rotate(227deg) brightness(100%) contrast(125%)",
              marginLeft: "2em",
            }}
          >
            <img
              src="/image/gadget24.png"
              alt="link mark"
              width="3%"
              height="3%"
            ></img>
          </span>
        )}
      </h2>
    </div>
  );
};
