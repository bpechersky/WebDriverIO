import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./tests/specs/**/*.ts'],
  exclude: ['./tests/specs/**/*.js'],

  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json',
    }
  },

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  onPrepare: function () {
    const fs = require('fs');
    const path = require('path');

    const testFiles = fs.readdirSync(path.resolve(__dirname, 'tests/specs'))
      .filter((file: string) => file.endsWith('.ts'));


    console.log('✅ Running spec files:', testFiles);
  },

  before: async function () {
    const { browser } = await import('@wdio/globals');
    await (browser as any).maximizeWindow();
  }
};