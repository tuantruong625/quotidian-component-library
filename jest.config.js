module.exports = {
 testEnvironment: "jsdom",
 setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
 moduleNameMapper: {
  ".(css|less|scss)$": "identity-obj-proxy",
 },
 coverageThreshold: {
  global: {
   lines: 98,
  },
 },
}