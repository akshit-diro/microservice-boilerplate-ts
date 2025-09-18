#!/usr/bin/env node
// Minimal CLI bootstrap
const [, , cmd = 'help', ...args] = process.argv;

async function main() {
  switch (cmd) {
    case 'version':
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      console.log('boilerplate-microservice v0.1.0');
      break;
    case 'ping':
      console.log('pong');
      break;
    case 'help':
    default:
      console.log('Usage: node dist/cli.js <command>');
      console.log('Commands: help | version | ping');
  }
}

main();

