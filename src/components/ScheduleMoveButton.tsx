import { motion } from "framer-motion";

import { useCheckIsMobile } from "@/hooks/checkIsMobile";

const PcScheduleMoveButton = ({
  setState,
  state,
  buttonText,
}: {
  setState: (state: number) => void;
  state: number;
  buttonText?: string;
}) => {
  return (
    <motion.div
      onClick={() => setState(state)}
      style={{
        cursor: "pointer",
        backgroundColor: "white",
        textAlign: "center",
        verticalAlign: "middle",
        textDecoration: "none",
        position: "relative",
        width: "15vw",
        height: "5vw",
        padding: "0.5vw 5vw",
        fontWeight: "bold",
        borderRadius: "1.2vw",
        color: "var(--secondary-color)",
        border: "0.5vw solid var(--secondary-color)",
        fontSize: "2vw",
        whiteSpace: "nowrap",
      }}
      initial={{
        boxShadow: "0.5vw 0.5vw var(--secondary-color)",
      }}
      whileHover={{
        boxShadow: "0vw 0vw var(--secondary-color)",
      }}
    >
      {buttonText}
    </motion.div>
  );
};

const MobileScheduleMoveButton = ({
  setState,
  state,
  buttonText,
}: {
  setState: (state: number) => void;
  state: number;
  buttonText?: string;
}) => {
  return (
    <motion.div
      onClick={() => setState(state)}
      style={{
        cursor: "pointer",
        backgroundColor: "white",
        textAlign: "center",
        verticalAlign: "middle",
        textDecoration: "none",
        position: "relative",
        width: "28vw",
        height: "9.5vw",
        padding: "0.5vw 5vw",
        fontWeight: "bold",
        borderRadius: "1.2vw",
        color: "var(--secondary-color)",
        border: "0.5vw solid var(--secondary-color)",
        fontSize: "5vw",
        whiteSpace: "nowrap",
        boxShadow: "0.5vw 0.5vw var(--secondary-color)",
      }}
      initial={{
        boxShadow: "0.5vw 0.5vw var(--secondary-color)",
      }}
      whileHover={{
        boxShadow: "0vw 0vw var(--secondary-color)",
      }}
    >
      {buttonText}
    </motion.div>
  );
};

export const ScheduleMoveButton = ({
  setState,
  state,
  buttonText,
}: {
  setState: (state: number) => void;
  state: number;
  buttonText?: string;
}) => {
  const [isMobile, _] = useCheckIsMobile();
  return isMobile
    ? MobileScheduleMoveButton({ setState, state, buttonText })
    : PcScheduleMoveButton({ setState, state, buttonText });
};
