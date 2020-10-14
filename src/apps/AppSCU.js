import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppMemo from "./AppMemo";
import AppPure from "./AppPure";

let count = 5


function increaseMethod() {
  count++
  console.log(count);
}

class AppSCU extends Component {
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

  shouldComponentUpdate(nextProps, nextState) {
    const { count: countOld } = this.state;
    const { count: countNew } = nextState;

    console.log(`count = ${countOld}, countNew = ${countNew}`);

    if (countOld === countNew) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.count}
          <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/pure">Pure</Link>
                </li>
                <li>
                  <Link to="/memo">Memo</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/pure">
                <AppPure />
              </Route>
              <Route path="/memo">
                <AppMemo count={count} increaseMethod={increaseMethod} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default AppSCU;
