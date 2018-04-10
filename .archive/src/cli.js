#!/usr/bin/env node

import chalk from "chalk";
import { h, render } from "ink";
import { Switch, Route, Router} from 'ink-router';
import jsx from 'import-jsx';

const Home = jsx('./c/Home.js');
const Foo = jsx('./c/Foo.js');
const log = console.log;

render (
  <Router initialEntries={['/', '/foo']}>
    <Switch>
      <Route exact path="/" component={Home} to="/foo" />
      <Route path="/foo" component={Foo} />
    </Switch>
  </Router>
)

//<Route path="/foo" component={Foo} {...this.props.args}/>
