#!/usr/bin/env node
const log = console.log;

const meow = require('meow');

const chalk = require('chalk');

const {
  h,
  render,
  Component,
  Text
} = require('ink');

const importJsx = require('import-jsx');

const {
  Demo
} = importJsx('./components/hello.js');
const {
  AutoDemo
} = importJsx('./components/search.js');
let c = meow(`
    Usage
        $ respace <input>

      Options
        --config, -c  Generate repospace from config

      Examples
        $ respace -config my-config.js
`, {
  flags: {
    config: {
      type: 'string',
      alias: 'c'
    }
  }
}); //render(h(Demo, c.flags));

render(h(AutoDemo, null)); //foo(c.input[0], c.flags);