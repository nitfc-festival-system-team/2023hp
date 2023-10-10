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
        {stand.url && (
          <div onClick={handleRedirect} style={{ cursor: "pointer" }}>
            {stand.organizer + "  " + stand.name + " : " + stand.place}
            <img
              src="/image/gadget24.png"
              alt="link mark"
              width="3%"
              height="3%"
            />
          </div>
        )}
      </h2>
    </div>
  );
};
