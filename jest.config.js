module.exports = {
    globalSetup: './setup.js',
    globalTeardown: './teardown.js',
    testEnvironment: 'jest-environment-node',
    reporters: [ "default",
         ["jest-junit", {"classNameTemplate": "e2e","titleTemplate": "{api.test} {title}"}]
        ]
  }