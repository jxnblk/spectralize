
# spectralize

Generates mathematically-derived spectral color arrays

## Usage

```js
var spectralize = require('spectralize')

var colors = spectralize({
  h: 20,
  s: 100,
  l: 50,
  hues: 6,
  steps: 6,
  padL: 20
})

// {
//   base: '#FF5500',
//   hues: [
//     [ '#660000', '#A80000', '#F00000', '#FF3333', '#FF7575', '#FFBDBD' ],
//     [ '#666600', '#A8A800', '#F0F000', '#FFFF33', '#FFFF75', '#FFFFBD' ],
//     [ '#006600', '#00A800', '#00F000', '#33FF33', '#75FF75', '#BDFFBD' ],
//     [ '#006666', '#00A8A8', '#00F0F0', '#33FFFF', '#75FFFF', '#BDFFFF' ],
//     [ '#000066', '#0000A8', '#0000F0', '#3333FF', '#7575FF', '#BDBDFF' ],
//     [ '#660066', '#A800A8', '#F000F0', '#FF33FF', '#FF75FF', '#FFBDFF' ]
//   ],
//   red: '#FF3333',
//   yellow: '#FFFF33',
//   lime: '#33FF33',
//   cyan: '#33FFFF',
//   blue: '#3333FF',
//   magenta: '#FF33FF'
// }
```

MIT License

