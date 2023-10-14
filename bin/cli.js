#!/usr/bin/env node
// This file is a CLI tool that will create a new project in the current directory.
// https://github.com/Finchasaurus/rbxts-femboy-stack

const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const runCommand = command => {
    try {
        execSync(command, {stdio: 'inherit'});
    } catch (error) {
        console.error(`Failed to run command: ${command}`, error);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Finchasaurus/rbxts-femboy-stack ${repoName}`;
const installDependenciesCommand = `cd ${repoName} && npm install`;

console.log(`Creating new project in ${repoName}...`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies...`);
const dependenciesInstalled = runCommand(installDependenciesCommand);
if (!dependenciesInstalled) process.exit(-1);

console.log("finishing up...");
fs.rmdirSync(path.join(process.cwd(), repoName, ".git"), {recursive: true});
fs.rmdirSync(path.join(process.cwd(), repoName, "bin"), {recursive: true});

console.log(`Everything is ready!`);