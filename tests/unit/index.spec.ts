import { SERVICE_NAME } from '../../src/index';

describe('test-for-internal-backend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('test-for-internal-backend');
  });
});