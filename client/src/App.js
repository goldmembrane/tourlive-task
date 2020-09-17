import React from "react";
import LabelBar from "./Component/LabelBar";
import List from "./Component/List";
import * as get from "./modules/getTourList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourList: [],
    };
    this.getTourListData = this.getTourListData.bind(this);
  }

  componentDidMount() {
    this.getTourListData();
  }

  getTourListData = async () => {
    const tour = await get.getTourList();

    console.log(tour.data);
    this.setState({
      tourList: this.state.tourList.concat(tour.data.data.results),
    });
  };

  render() {
    return (
      <div>
        <LabelBar total={this.state.tourList} />
        <List lists={this.state.tourList} />
      </div>
    );
  }
}

export default App;
