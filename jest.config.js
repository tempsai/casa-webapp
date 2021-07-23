
module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      '^@testing-library/(.*)$': '<rootDir>/node_modules/@testing-library/react',
    }
  };