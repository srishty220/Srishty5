import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    setupFiles: ['./database_test_setup.ts'],
    include: ['src/**/*.test.ts'], // your unit tests
    exclude: ['tests/**/*.spec.ts'] // explicitly ignore API tests by default
  }
})
