import React from "react";
import Userbell from "./userbell";
import HeaderProfile from "./headerprofile";
import HeaderAddMemo from "./headeraddmemo";

export default class header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header_wrapper">
          <div className="logo-header">
            <div>
              <img
                className="logo"
                src="http://localhost:8090/images/logo.png"
              />
              <div className="logo-header-title">
                <p>ShareEditor.Md</p>
              </div>
            </div>
          </div>
          <div className="search_div">
            <form className="search-form" action="">
              <div className="search">
                <input
                  className="input-search"
                  type="text"
                  name="input-search"
                  placeholder="검색어를 입력하세요"
                />
                <button type="submit" className="search-submit" value="검색">
                  <i className="fas fa-hashtag"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="right-header">
            <HeaderAddMemo />

            <HeaderProfile />

            <Userbell />
          </div>
        </div>
      </div>
    );
  }
}
