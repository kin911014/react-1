import React from "react";
import Header from "./header/Header";
import Sidebar from "./Sidebar";
import Contents from "./Contents";
import Footer from "./Footer";

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Sidebar />
        <Contents />
        <Footer />
      </div>
    );
  }
}
