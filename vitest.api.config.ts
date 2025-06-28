import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.spec.ts'], // Only API tests
    setupFiles: ['./database_test_setup.ts']
  }
})
