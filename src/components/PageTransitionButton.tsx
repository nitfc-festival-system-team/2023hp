import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const PageTransitionButton = ({
  buttonText,
  nextPage,
}: {
  buttonText: string;
  nextPage: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contents/" + nextPage, undefined, { scroll: false });
    return;
  };

  return (
    <div onClick={handleClick}>
      <motion.div
        style={{
          width: "8vw",
          height: "4vw",
          backgroundColor: "white",
          cursor: "pointer",
        }}
        whileTap={{
          scale: 0.8,
          boxShadow: "0 0 1vw rgba(0, 0, 0, 0.3)",
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "black",
            fontSize: "1.3vw",
          }}
        >
          {buttonText}
        </p>
      </motion.div>
    </div>
  );
};
