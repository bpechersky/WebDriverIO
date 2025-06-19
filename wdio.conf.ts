import type { Options } from '@wdio/types';
import { browser } from '@wdio/globals';

export const config: Options.Testrunner = {
  runner: 'local',

  specs: ['./tests/specs/**/*.e2e.ts'], // ← avoid picking up globals.d.ts


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
  },

  before: async function () {
    // ✅ Temporary workaround: cast to any to avoid type conflicts
    await (browser as any).maximizeWindow();
  }
};
