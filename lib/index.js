// Module dependencies and export
export default zIndices;

const sum = (a, b) => a + b;

function zIndices(config = {}) {
  const getValue = key => config[key];
  return keys => {
    return keys
      .map(getValue)
      .reduce(sum, 0);
  };
}

