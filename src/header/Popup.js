import React from "react";

export default class Popup extends React.Component {
  render() {
    return (
      <div className="popup" onClick={this.props.closePopup}>
        <div className="popup_inner" onClick={(e) => e.stopPropagation()}>
          <div className="popup_inner_contents">
            <div className="inner_contents_text">
              <form>
                <input type="textarea" placeholder="내용작성..."></input>
                <input type="submit" value="저장"></input>
              </form>
            </div>
            <div className="inner_contents_btns">
              <div className="btns_share">
                <button>
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
              <div className="btns_color">
                <button>
                  <i className="fas fa-palette"></i>
                </button>
              </div>
              <div className="btns_save">
                <button>
                  <i className="far fa-save"></i>
                </button>
              </div>
              <div className="btns_trash">
                <button>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
          <button onClick={this.props.closePopup}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }
}
