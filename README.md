
# Frontend App (Starter)

Next.js + TypeScript + Tailwind with automated tests:
- Playwright E2E
- Axe accessibility
- Lighthouse CI performance
- GitHub Actions → deploy to Vercel preview (requires secrets)

## Quick start
```bash
npm i
npm run dev
```

## CI Secrets required (in GitHub → Settings → Secrets and variables → Actions)
- `VERCEL_TOKEN` – personal token from Vercel account settings
- (optional) You may also need `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` if you further customize the workflow.

## Scripts
- `npm run test:e2e` → Playwright tests
- `npm run test:a11y` → Axe checks (via PW)
- `npm run lhci:ci` → Lighthouse CI
