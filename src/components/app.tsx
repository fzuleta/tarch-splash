import * as React from 'react'; 
import * as css from './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Dashboard} from './dashboard/dashboard';

export class App extends React.Component<any, any> {
  public constructor(props) {
    super(props);
  }
  public render() {
    return (
    <>
      <Router>
        <Route exact path='/' component={Dashboard} />
      </Router>
    </>);
  }
}
