import type { Options } from "@wdio/types";
import fs from "fs";
import path from "path";

export const config: Options.Testrunner = {
  runner: "local",
  baseUrl: "https://demoqa.com",

  specs: ["./tests/specs/**/*.ts"],
  exclude: ["./tests/specs/**/*.js"],

  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--disable-features=InterestCohort",
          "--disable-blink-features=AutomationControlled",
          "--blink-settings=imagesEnabled=false",
        ],
      },
    },
  ],

  logLevel: "info",
  framework: "mocha",

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./tsconfig.json",
    },
  },

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  onPrepare: function () {
    const testFiles = fs
      .readdirSync(path.resolve(__dirname, "tests/specs"))
      .filter((file: string) => file.endsWith(".ts"));
    console.log("✅ Running spec files:", testFiles);
  },

  before: async function () {
    const { browser } = await import("@wdio/globals");
    await (browser as any).maximizeWindow();
  },
};
