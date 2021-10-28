// module.exports = {
//     globalSetup: './setup.js',
//     globalTeardown: './teardown.js',
//     testEnvironment: 'jest-environment-node',
//     reporters: [
//         "default",
//           [ "jest-junit", { suiteName: "api-test" } ]
//     ]
//   }

//   module.exports = async () => {
//     return {

//         globalSetup: './setup.js',
//         globalTeardown: 'jest.setup.js',
//         testEnvironment: 'jest-environment-node',
//         reporters: [
//             "default",
//               [ "jest-junit", { suiteName: "api-test" } ]
//         ]
//     };
//   };

const config = {
    verbose: true,
    node_modules: './setup.js',
    globalConfig: 'jest.setup.js',
            testEnvironment: 'jest-environment-node',
            reporters: [
                "default",
                  [ "jest-junit", { suiteName: "api-test" } ]
            ] 
  };

  module.exports = config;