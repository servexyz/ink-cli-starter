//const {h, render, Component, Text} = require('ink');
import {h, render, Component, Text} from 'ink';
import { Router } from 'ink-router';
import App from './c/App';
import Foo from './c/Foo';

render (
  <Router>
    <App /> 
    <Foo name="Alec" />
  </Router>
)

