import { Title } from "@/components/Title";
import { Notice } from "@/components/Notice";
import { Map } from "@/components/Map";
import { Schedule } from "@/components/Schedule";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title />
      <Notice />
      <Map />
      <Schedule />
    </div>
  );
}
