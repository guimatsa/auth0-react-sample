import React from "react";

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange() {
    this.setState({ status: !this.state.status }, this.updateLibraryCount);
  }

  render() {
    return <div>Infinity Coaching Home Page</div>;
  }
}

export default HomeContent;
