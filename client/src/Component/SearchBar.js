import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.text });
  }

  render() {
    return (
      <div className="search-box">
        <input
          type="text"
          className="search-text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button className="submit-search-text">검색</button>
      </div>
    );
  }
}

export default SearchBar;
