import zIndices from '../lib';

describe('z-indices', () => {
  it('should work without config', function () {
    const zIndex = zIndices({})([]);
    expect(zIndex).toBe(0);
  });
  
  it('should work with one key', function () {
    const zIndex = zIndices({
      'popup': 50
    })(['popup']);
    expect(zIndex).toBe(50);
  });
  
  it('should work with several key', function () {
    const zIndex = zIndices({
      'popup': 50,
      'atop': 100
    })(['popup', 'atop']);
    expect(zIndex).toBe(150);
  });
  
  it('should use only selected keys', function () {
    const zIndex = zIndices({
      'popup': 50,
      'atop': 100
    })(['atop']);
    expect(zIndex).toBe(100);
  });
  
});
