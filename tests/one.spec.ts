import semver from 'semver';
import { test, expect } from './fixtures';

test.skip(({ browserName, currentGrafanaVersion }) => {
  console.log('INSIDE SKIP', browserName, currentGrafanaVersion);
  return semver.lt(currentGrafanaVersion, '10.0.0');
}, 'Insights is only available in Grafana 10.0.0 and above');

test.describe('Insights', () => {
  // my tests...
  test('should be able to create a new dashboard', async ({  }) => {
    console.log('test');
  });

});