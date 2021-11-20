import React from 'react'
import "./index.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/index'
import SigninPage from "./Pages/signin";


class App extends React.Component {
  state = {
    loading: true
  };


  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <Router basename="/Pages">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
        </Switch>
      </Router>
    );
  }
}


export default App;
