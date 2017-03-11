export default (config = {}) => {
  return keys => {
    return keys
      .map(key => config[key])
      .reduce((a, b) => a + b, 0);
  };
};
