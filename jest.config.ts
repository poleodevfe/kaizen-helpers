import { existsSync, readFileSync } from 'fs'
import type { Config } from '@jest/types/build'

let path = '.env'
if (!existsSync(path)) path = '.env-example'

const arr = readFileSync(path, 'utf8')
  ?.split('\n')
  ?.reduce((vars, i) => {
    const [variable, value] = i.split('=')
    return {
      ...vars,
      [variable]: value
    }
  }, {})

process.env = Object.assign(process.env, arr)

const config: Config.InitialOptions = {
  coverageThreshold: {
    global: {
      branches: 35,
      functions: 35,
      lines: 35
    }
  },
  collectCoverageFrom: [
    'src/**/*.{ts}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],
  moduleNameMapper: {
    // '^src/(.*)\\.ts$': '<rootDir>/src/$1',
    // '^src(.*)$': '<rootDir>/src$1'
    '^src/(.*)\\.ts$': '<rootDir>/src$1'
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  roots: ['<rootDir>/src/']
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}

export default config
