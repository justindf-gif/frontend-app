
import { test, expect } from '@playwright/test';

test('home page renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'AI Frontend Starter' })).toBeVisible();
});

test('@a11y: no serious Axe violations', async ({ page }) => {
  await page.goto('/');
  const { analyze } = await import('@axe-core/playwright');
  const { violations } = await analyze(page);
  const serious = violations.filter(v => ['serious','critical'].includes(v.impact ?? ''));
  expect(serious, JSON.stringify(serious, null, 2)).toHaveLength(0);
});
