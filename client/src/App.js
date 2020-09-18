import axios from "axios";
import React from "react";
import LabelBar from "./Component/LabelBar";
import List from "./Component/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourList: [],
      pageSize: 10,
      current: 1,
    };
    this.getTourListData = this.getTourListData.bind(this);
    this.searchContext = this.searchContext.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    this.getTourListData();
  }

  getTourListData() {
    let one =
      "http://tourlive-external-1isp315cijj1v-591526764.ap-northeast-2.elb.amazonaws.com:8888/v1/tours";
    let two =
      "http://tourlive-external-1isp315cijj1v-591526764.ap-northeast-2.elb.amazonaws.com:8888/v1/tours?page=2";
    let three =
      "http://tourlive-external-1isp315cijj1v-591526764.ap-northeast-2.elb.amazonaws.com:8888/v1/tours?page=3";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

    axios.all([requestOne, requestTwo, requestThree]).then(
      axios.spread((...res) => {
        const resOne = res[0].data.data.results;
        const resTwo = res[1].data.data.results;
        const resThree = res[2].data.data.results;

        const resData = [...resOne, ...resTwo, ...resThree];

        this.setState({ tourList: resData });
      })
    );
  }

  handleChangePage(pageNumber) {
    this.setState({ current: pageNumber });
  }

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
        <List
          lists={this.state.tourList}
          size={this.state.pageSize}
          current={this.state.current}
          change={this.handleChangePage}
        />
      </div>
    );
  }
}

export default App;
