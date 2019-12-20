import React, {Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import Explanation from "./components/Explanation";
import DarkMode from "./components/DarkMode";

class App extends Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
        this.setState({ isLoading: false });
    }, 500);
}
  render() {
    const { isLoading } = this.state;
    return <section className="container">
    {isLoading ? (
      <div className="loader">
        <span className="loader_text">Loading...</span>
      </div>
    ) : (
    <div className="Main">
      <div className="calculator-area">
        <div className="calculator-body">
          <DarkMode />
          <ResultComponent result={this.state.result}/>
          <KeyPadComponent onClick={this.onClick}/>
        </div>
      </div>
      <div className="explanation-body"><Explanation /></div>
    </div>
    )}
  </section>
}
}

export default App;
