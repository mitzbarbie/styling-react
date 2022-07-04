import { Component } from "react";
import SassComponent from "./SassComponent";
import CSSMoudule from "./CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        <CSSMoudule />
      </div>
    );
  }
}

export default App;
