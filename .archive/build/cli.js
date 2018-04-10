#!/usr/bin/env node
"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _ink = require("ink");

var _inkRouter = require("ink-router");

var _importJsx = _interopRequireDefault(require("import-jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Home = (0, _importJsx.default)('./c/Home.js');
const Foo = (0, _importJsx.default)('./c/Foo.js');
const log = console.log;
(0, _ink.render)((0, _ink.h)(_inkRouter.Router, {
  initialEntries: ['/', '/foo']
}, (0, _ink.h)(_inkRouter.Switch, null, (0, _ink.h)(_inkRouter.Route, {
  exact: true,
  path: "/",
  component: Home,
  to: "/foo"
}), (0, _ink.h)(_inkRouter.Route, {
  path: "/foo",
  component: Foo
})))); //<Route path="/foo" component={Foo} {...this.props.args}/>