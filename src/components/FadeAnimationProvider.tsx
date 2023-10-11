import { motion } from "framer-motion";
import { ReactNode } from "react";

export const FadeAnimationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <motion.div
      variants={{
        offscreen: {
          // 画面外の場合のスタイル
          y: 100,
          opacity: 0,
        },
        onscreen: {
          // 画面内の場合のスタイル
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      }}
      initial="offscreen" // 初期表示はoffscreen
      whileInView="onscreen" // 画面内に入ったらonscreen
      viewport={{ once: false, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};
