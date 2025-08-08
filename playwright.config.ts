
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run build && npm start',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
