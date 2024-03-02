export default {
    collectCoverage: false,
    moduleNameMapper: {
        '@quizzle/(.*)': '<rootDir>/src/@quizzle/$1',
    },
    reporters: [['jest-silent-reporter', { showPaths: true }], 'summary'],
    setupFilesAfterEnv: ['<rootDir>/src/@quizzle/setupTests.ts'],
    snapshotSerializers: ['@emotion/jest/serializer'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '.+\\.(css|scss|png|jpg|svg|gif)$': 'jest-transform-stub',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
