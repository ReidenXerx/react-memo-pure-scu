import React, { PureComponent } from "react";

class Pure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  /*
  shouldComponentUpdate(nextProps, nextState) {
    var { count } = this.state;
    const countOld = count;
    var { count } = nextState;
    const countNew = count;
    console.log(`count = ${countOld}, countNew = ${countNew}`);
    if (countOld === countNew) {
      return false;
    } else return true;
  }
  */
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
      </div>
    );
  }
}
export default Pure;
