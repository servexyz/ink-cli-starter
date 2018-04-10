import chalk from "chalk";
import { h, render } from "ink";
import { Switch, Route, CommandLineRouter as Router} from 'ink-router';
import Home from './c/Home';
import Foo from './c/Foo';
const log = console.log;

render (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/foo" component={Foo} {...this.props.args}/>
    </Switch>
  </Router>
)

