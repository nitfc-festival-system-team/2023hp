import { useCheckIsMobile } from "@/features/checkIsMobile";

export const VenueMap = () => {
  const [isMobile, device] = useCheckIsMobile();
  console.log(device);

  return (
    <>
      <img
        src="image/venue_map_small.jpg"
        useMap="#ImageMap"
        alt="venue-map"
        style={{
          translate: isMobile
            ? device === "iPad"
              ? "50vw 5vh"
              : "25vh 15vh"
            : "5vw 30vh",
          scale: isMobile ? "0.9" : "1",
        }}
      />
      <map name="ImageMap">
        <area
          shape="rect"
          coords="270,387,297,412"
          href="/contents/stand#1"
          alt=""
        />
        <area
          shape="rect"
          coords="271,412,297,436"
          href="/contents/stand#2"
          alt=""
        />
        <area
          shape="rect"
          coords="273,457,299,481"
          href="/contents/stand#3"
          alt=""
        />
        <area
          shape="rect"
          coords="272,481,298,504"
          href="/contents/stand#4"
          alt=""
        />
        <area
          shape="rect"
          coords="184,384,209,418"
          href="/contents/stand#5"
          alt=""
        />
        <area
          shape="rect"
          coords="184,418,208,450"
          href="/contents/stand#6"
          alt=""
        />
        <area
          shape="rect"
          coords="183,455,210,487"
          href="/contents/stand#7"
          alt=""
        />
        <area
          shape="rect"
          coords="182,487,210,520"
          href="/contents/stand#8"
          alt=""
        />
        <area
          shape="rect"
          coords="213,590,251,611"
          href="/contents/stand#9"
          alt=""
        />
        <area
          shape="rect"
          coords="177,589,212,613"
          href="/contents/stand#10"
          alt=""
        />
        <area
          shape="rect"
          coords="327,628,365,653"
          href="/contents/stand#11"
          alt=""
        />
        <area
          shape="rect"
          coords="368,628,405,652"
          href="/contents/stand#12"
          alt=""
        />
        <area
          shape="rect"
          coords="409,629,445,653"
          href="/contents/stand#13"
          alt=""
        />
        <area
          shape="rect"
          coords="484,629,520,653"
          href="/contents/stand#14"
          alt=""
        />
        <area
          shape="rect"
          coords="523,629,560,652"
          href="/contents/stand#15"
          alt=""
        />
        <area
          shape="rect"
          coords="559,629,597,651"
          href="/contents/stand#16"
          alt=""
        />
        <area
          shape="rect"
          coords="605,603,631,629"
          href="/contents/stand#17"
          alt=""
        />
        <area
          shape="rect"
          coords="605,578,631,604"
          href="/contents/stand#18"
          alt=""
        />
        <area
          shape="rect"
          coords="604,550,630,579"
          href="#/contents/stand#19"
          alt=""
        />
        <area
          shape="rect"
          coords="605,523,632,551"
          href="/contents/stand#20"
          alt=""
        />
        <area
          shape="rect"
          coords="605,495,632,524"
          href="/contents/stand#21"
          alt=""
        />
        <area
          shape="rect"
          coords="605,470,630,496"
          href="/contents/stand#22"
          alt=""
        />
        <area
          shape="rect"
          coords="605,443,631,472"
          href="/contents/stand#23"
          alt=""
        />
        <area
          shape="rect"
          coords="605,416,631,444"
          href="/contents/stand#24"
          alt=""
        />
        <area
          shape="rect"
          coords="605,388,631,417"
          href="/contents/stand#25"
          alt=""
        />
        <area
          shape="rect"
          coords="605,361,630,389"
          href="/contents/stand#26"
          alt=""
        />
      </map>
    </>
  );
};
