module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/types.ts',
    '!src/**/mock.ts',
    '!src/**/stories.tsx',
    '!src/pages/**/*.ts(x)',
    '!src/styles/*.ts',
    '!src/utils/apollo.ts',
    '!src/graphql/**/*.ts',
    '!src/utils/apolloCache.ts',
    '!src/types/*.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
