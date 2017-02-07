# z-indices

> A simple javascript utility for calculating z-index.

Distributed as UMD module.

## Installing

```sh
$ yarn add z-indices
# or
$ npm install --save z-indices
```

## Usage

Provide configuration dictionary object then pass arrays of keys to calculate z-index.

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

* Run tests: `yarn test`;
* Build `yarn build`;

## License

MIT © [Dmitriy Semyushkin](https://devg.ru)
