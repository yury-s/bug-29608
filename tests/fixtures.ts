// fixtures.ts
import { test as base, Fixtures } from '@playwright/test';

interface TestFixtures extends Fixtures {
  currentGrafanaVersion: string;
}

export * from '@playwright/test';
export const test = base.extend<TestFixtures>({
  currentGrafanaVersion: ({}, use) => use('9.0.0'), // 
});