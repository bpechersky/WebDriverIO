import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./tests/specs/**/*.ts'],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  autoCompileOpts: {
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json'
    }
  },
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
