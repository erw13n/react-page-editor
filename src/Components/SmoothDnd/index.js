import React from "react";
import Container from "./Container";
import Draggable from "./Draggable";
import { applyDrag, generateItems } from "./utils";

const groupStyle = {
  marginLeft: "50px",
  flex: 1
};

export default class MySmoothDnd extends React.Component {
  state = {
    items1: generateItems(15, i => ({
      id: "1" + i,
      data: `Source Draggable - ${i}`
    })),
    items2: generateItems(15, i => ({
      id: "2" + i,
      data: `Draggable 2 - ${i}`
    })),
    items3: generateItems(15, i => ({
      id: "3" + i,
      data: `Draggable 3 - ${i}`
    })),
    items4: generateItems(15, i => ({
      id: "4" + i,
      data: `Draggable 4 - ${i}`
    })),

    section: [
      {
        name: "1 Column",
        columns: [12]
      },
      {
        name: "2 Column",
        columns: [6, 6]
      },
      {
        name: "3 Column",
        columns: [4, 4, 4]
      },
      {
        name: "4 Column",
        columns: [3, 3, 3, 3]
      },
      {
        name: "5 Column",
        columns: [2, 2, 2, 2, 2]
      },
      {
        name: "side left",
        columns: [4, 8]
      },
      {
        name: "side right",
        columns: [8, 4]
      }
    ],
    views:[
      {
        name: "1 Column",
        columns: [12]
      },
      {
        name: "2 Column",
        columns: [6, 6]
      },
    ],
  };

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
          <Container
            groupName="1"
            behaviour="copy"
            getChildPayload={i => this.state.section[i]}
            onDrop={e =>
              this.setState({ section: applyDrag(this.state.section, e) })
            }
          >
            {this.state.section.map((p, j) => {
              return (
                <Draggable key={j} className="draggable row">
                  <div style={{
                    textAlign: "center", cursor: "grab", border: "dashed 1px #444", marginBottom: 10, fontSize: 10, padding: "5px 0"}}>
                  {p.name}
                  </div>
                </Draggable>
              );
            })}
          </Container>
        </div>
        <div style={groupStyle}>
          <Container
            groupName="1"
            getChildPayload={i => this.state.views[i]}
            onDrop={e =>
              this.setState({ views: applyDrag(this.state.views, e) })
            }
          >
            {this.state.views.map((p, i) => {
              return (
                <Draggable key={i}>
                  <div className="row" style={{marginBottom: 10}}>
                    {p.columns.map((c, j) => {
                      return (
                        <div
                          key={i + "" + j}
                          className={c === 8 ? "col-md-" + c : "col"}
                          data-key={i + "" + j}
                          style={{
                            textAlign: "center",
                            cursor: "grab",
                            border: "dashed 1px #444",
                            fontSize: 10,
                            padding: "5px 0"
                          }}
                        >
                          content
                      </div>
                      );
                    })}
                  </div>
                </Draggable>
              );
            })}
          </Container>
        </div>
      </div>
    );
  }
}
