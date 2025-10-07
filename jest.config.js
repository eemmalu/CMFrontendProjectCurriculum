export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: [
    '**/module-*/homework/tests/**/*.test.js',
    '**/module-*/homework/tests/**/*.test.ts',
    '**/module-*/homework/tests/**/*.test.tsx',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
}
