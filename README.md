# swob

[![npm](https://img.shields.io/npm/v/swob)](https://www.npmjs.com/package/swob) [![GitHub](https://img.shields.io/github/license/tylim88/swob)](https://github.com/tylim88/swob/blob/main/LICENSE) [![tylim88](https://circleci.com/gh/tylim88/swob.svg?style=shield)](<[LINK](https://github.com/tylim88/swob#swob)>)

🐤 swap object key and value and return accurate type.

🥰 0 dependency.

⛲️ Out of box typescript support.

🦺 Tested.

## Installation

```bash
npm i swob
```

## Usage

🎵 Usage

```ts
import swob from 'swob'

const swapped = swob({ a: '1' as const, b: '2' as const, c: '3' as const })

console.log(swapped) // {'1': 'a','2': 'b','3': 'c'}

type swapped = typeof swapped // {'1': 'a','2': 'b','3': 'c'}
```

Important, you must use `const assertion` as shown in above example!

return new object, does not modify original object
