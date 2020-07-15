module.exports = {
  preset: "jest-expo",
  testEnvironment: "node",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.config.js",
    "!**/App.js",
    "!**/src/index.js",
    "!**/api/**",
    "!**/redux/**",
    "!**/screen/**",
    "!**/utils/**",
  ],
  coverageThreshold: {
    global: {
      statements: 87,
      branches: 85,
      functions: 87,
      lines: 87,
    },
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
