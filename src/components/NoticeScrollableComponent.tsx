import React, { Component } from "react";

import { NoticeList } from "@/components/NoticeList";

class NoticeScrollableComponent extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%" /* コンテナの幅を設定 */,
          height: "100%" /* コンテナの高さを設定 */,
          marginLeft: "2vw",
          overflow:
            "scroll" /* スクロールバーを表示するためのオーバーフロー設定 */,
          color: "black" /* 文字色を設定 */,
        }}
      >
        <NoticeList />
      </div>
    );
  }
}

export default NoticeScrollableComponent;
