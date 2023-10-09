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
        display: "flex",
        flexDirection: "row",
        gap: "25px",
      }}
    >
      <h2>
        {stand.url && (
          <div onClick={handleRedirect} style={{ cursor: "pointer" }}>
            {stand.organizer + "  " + stand.name + " : " + stand.place}
          </div>
        )}
      </h2>
    </div>
  );
};
