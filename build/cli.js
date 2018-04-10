#!/usr/bin/env node
"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _ink = require("ink");

var _inkRouter = require("ink-router");

var _Home = _interopRequireDefault(require("./c/Home.js"));

var _Foo = _interopRequireDefault(require("./c/Foo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = console.log;
(0, _ink.render)((0, _ink.h)(_inkRouter.Router, {
  initialEntries: ['/', '/foo']
}, (0, _ink.h)(_inkRouter.Switch, null, (0, _ink.h)(_inkRouter.Route, {
  exact: true,
  path: "/",
  component: _Home.default,
  to: "/foo"
}), (0, _ink.h)(_inkRouter.Route, {
  path: "/foo",
  component: _Foo.default
})))); //<Route path="/foo" component={Foo} {...this.props.args}/>