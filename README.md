# z-indices

A simple javascript utility for calculating z-index.

Usage:

```js
import zIndices from 'z-indices';

const zIndex = zIndices({
  'foreground': 10,
  'background': 0,
  'popup': 1000
});

zIndex(['foreground', 'popup']); // 1010
```

## Development

* Run tests: `npm run test`;
* Build `npm run build`;
