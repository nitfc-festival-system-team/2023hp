import { useEffect, useState } from "react";

export function useCheckIsMobile(): [boolean | null, string] {
  // ステートの初期値を null に設定
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [device, setDevice] = useState<string>("");

  useEffect(() => {
    // クライアント側でユーザーエージェント情報を取得
    const userAgent = window.navigator.userAgent;

    const mobile =
      userAgent.includes("iPhone") ||
      userAgent.includes("Android") ||
      userAgent.includes("iPad");

    // isMobile ステートを更新
    setIsMobile(mobile);

    if (device.includes("Android")) {
      setDevice("Android");
    } else if (device.includes("iPhone")) {
      setDevice("iPhone");
    } else if (device.includes("iPad")) {
      setDevice("iPad");
    } else {
      setDevice("PC");
    }
  }, [device]);

  return [isMobile, device];
}
