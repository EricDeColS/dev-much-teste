module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverageFrom: ['src'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
};
