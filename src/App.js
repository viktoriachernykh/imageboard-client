import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={ListContainer} />
          {/* <Route path="/event/:id" component={EventDetailsContainer} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
