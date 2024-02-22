import semver from 'semver';
import { test, expect } from './fixtures';

test.skip(({ browserName }) => {
  console.log('INSIDE SKIP', browserName);
  return semver.lt('9.0.0', '10.0.0'); // I'd like to access the currentGrafanaVersion fixture here
}, 'Insights is only available in Grafana 10.0.0 and above');

test.describe('Insights', () => {
  test('should be able to create a new dashboard', async ({  }) => {
    console.log('test');
  });
  // my tests...
});