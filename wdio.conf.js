exports.config = {
    runner: 'local',
    specs: ['./tests/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-infobars', '--start-maximized']
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://demoqa.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }
};
