import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,
  collectCoverageFrom: ['./src/app/**/*.ts', './src/app/**/*.html', '!./src/app/**/*routing.ts', '!./src/app/**/*module.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/src/app/pages/landing', '<rootDir>/src/app/shared/services'],
  coveragePathIgnorePatterns: ['<rootDir>/src/app/app.config.ts', '<rootDir>/src/app/app.routes.ts', '<rootDir>/src/app/shared/sockets/websocket.service.ts'],
  coverageReporters: ['text', 'cobertura', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
};

export default config;
