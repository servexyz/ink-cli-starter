"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _ink = require("ink");

var _inkRouter = require("ink-router");

var _Home = _interopRequireDefault(require("./c/Home"));

var _Foo = _interopRequireDefault(require("./c/Foo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const log = console.log;
(0, _ink.render)((0, _ink.h)(_inkRouter.CommandLineRouter, null, (0, _ink.h)(_inkRouter.Switch, null, (0, _ink.h)(_inkRouter.Route, {
  exact: true,
  path: "/",
  component: _Home.default
}), (0, _ink.h)(_inkRouter.Route, _extends({
  path: "/foo",
  component: _Foo.default
}, (void 0).props.args)))));