import React, { Component } from "react";
import { StandList } from "@/components/StandList";

class StandScrollableComponent extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%" /* コンテナの幅を設定 */,
          height: "200px" /* コンテナの高さを設定 */,
          overflow:
            "scroll" /* スクロールバーを表示するためのオーバーフロー設定 */,
          color: "black" /* 文字色を設定 */,
        }}
      >
        <StandList />
      </div>
    );
  }
}

export default StandScrollableComponent;
