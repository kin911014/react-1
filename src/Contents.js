import React from "react";

export default class contents extends React.Component {
  render() {
    return (
      <div className="contents">
        <div className="contents-header">
          <div id="contents-header-title">
            <h3>개인1</h3>
          </div>
          <div id="contents-header-showinglist">
            <a href="#">showinglist</a>
          </div>
          <div id="contents-header-addgroup">
            <a href="#">addgroup</a>
          </div>
          <div id="contents-header-invite">
            <a href="#">invite</a>
          </div>
        </div>
        <div className="contents-memo"></div>
      </div>
    );
  }
}
