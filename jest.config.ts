/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import nextJest from 'next/jest';
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  dir: '.',
});

const config: Config = {
  clearMocks: true,
  preset: 'ts-jest',
  rootDir: "src",
  roots: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
};

export default createJestConfig(config);
