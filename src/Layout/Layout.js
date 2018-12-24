import React from "react";
import styled from "@emotion/styled";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Container = styled.div({
  height: "100%",
  font: "normal normal 1rem/1.4 Roboto, Helvetica, Arial, sans-serif",
  margin: 0
});

const Editor = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  minHeight: "600px",
  color: "#fff",
  fontFamily: "Roboto, Arial, sans-serif",
  webkitFontSmoothing: "antialiased",
  overflow: "hidden",
  lineHeight: "1.555",
  background: "#212121",
  paddingTop: 0,
  transition: "all .3s ease"
});

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Editor>
          <Sidebar />
          <Content />
        </Editor>
      </Container>
    );
  }
}
