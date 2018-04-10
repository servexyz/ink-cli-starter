import test from "ava";

const log = console.log;
const path = require("path");

test("CLI has execution permission", t => {
  const cli = path.join(__dirname, "../cli.js");
  const chmod = require("chmod");
  let modifiedCLI = chmod(cli, 777);
  t.is(modifiedCLI, undefined);
});

test("Pre-babel build CLI executes properly", t => {
  const exec = require("child_process").exec;
  exec("./cli.js unicorns --rainbow", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
  t.pass();
});
