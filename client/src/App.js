import axios from "axios";
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
    this.searchContext = this.searchContext.bind(this);
  }

  componentDidMount() {
    this.getTourListData();
  }

  getTourListData = async () => {
    const tour = await get.getTourList();
    this.setState({
      tourList: tour.data.data.results,
    });
  };

  searchContext(text) {
    axios
      .get(
        "http://tourlive-external-1isp315cijj1v-591526764.ap-northeast-2.elb.amazonaws.com:8888/v1/tours",
        {
          params: {
            search: text,
          },
        }
      )
      .then((res) => {
        this.setState({ tourList: res.data.data.results });
      });
  }

  render() {
    return (
      <div>
        <LabelBar total={this.state.tourList} search={this.searchContext} />
        <List lists={this.state.tourList} />
      </div>
    );
  }
}

export default App;
