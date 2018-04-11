//const {h, render, Component, Text} = require('ink');
import { h, render, Component, Text } from "ink";
import { Router } from "ink-router";
import { Vini, Vidi, Vici } from "./c";
import Link from "ink-link";

render(
  <Router>
    <Vini />
    <br />
    <Vidi />
    <br />
    <Vici />
    <br />
    <Link url="/vici" />
  </Router>
);
