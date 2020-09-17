import React from "react";
import LabelBar from "./Component/LabelBar";
import List from "./Component/List";

class App extends React.Component {
  render() {
    return (
      <div>
        <LabelBar />
        <List />
      </div>
    );
  }
}

export default App;
