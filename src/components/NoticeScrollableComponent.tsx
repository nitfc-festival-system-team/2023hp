import React, { Component } from "react";

class NoticeScrollableComponent extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%" /* コンテナの幅を設定 */,
          height: "200px" /* コンテナの高さを設定 */,
          overflow:
            "scroll" /* スクロールバーを表示するためのオーバーフロー設定 */,
        }}
      >
        <div className="content">{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</div>
        <div className="content">{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</div>
        <div className="content">{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</div>
        <div className="content">{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</div>
        <div className="content">{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</div>
        <div className="content">{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</div>
        <div className="content">{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</div>
      </div>
    );
  }
}

export default NoticeScrollableComponent;
