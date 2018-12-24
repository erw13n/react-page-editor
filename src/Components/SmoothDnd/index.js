import React from "react";

import Editor from './Editor';
import View from './View';

const groupStyle = {
  marginLeft: "50px",
  flex: 1
};


class MySmoothDnd extends React.Component {
  render() {

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "stretch",
          marginTop: "50px",
          marginRight: "50px"
        }}
      >
        <div style={groupStyle}>
          <Editor />
        </div>
        <div style={groupStyle}>
          <View />
        </div>
      </div>
    );
  }
}

export default MySmoothDnd;