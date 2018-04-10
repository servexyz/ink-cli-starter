#!/usr/bin/env node

import chalk from "chalk";
import { h, render } from "ink";
import { Switch, Route, Router} from 'ink-router';
import Home from './c/Home.js';
import Foo from './c/Foo.js';
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
