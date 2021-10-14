# object-swap-typed

[![npm](https://img.shields.io/npm/v/object-swap-typed)](https://www.npmjs.com/package/object-swap-typed) [![GitHub](https://img.shields.io/github/license/tylim88/object-swap-typed)](https://github.com/tylim88/object-swap-typed/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/object-swap-typed/pulls) [![tylim88](https://circleci.com/gh/tylim88/object-swap-typed.svg?style=shield)](<[LINK](https://github.com/tylim88/object-swap-typed#object-swap-typed)>)

🐤 swap object key and value and return accurate type.

🥰 0 dependency.

⛲️ Out of box typescript support.

🦺 Tested.

## Installation

```bash
npm i object-swap-typed
```

## Usage

🎵 Usage

```ts
import { objSwap } from 'object-swap-typed'

const swapped = objSwap({ a: '1' as const, b: '2' as const, c: '3' as const })

console.log(swapped) // {'1': 'a','2': 'b','3': 'c'}

type swapped = typeof swapped // {'1': 'a','2': 'b','3': 'c'}
```

Important, you must use `const assertion` as shown in above example!

return new object, does not modify original object
