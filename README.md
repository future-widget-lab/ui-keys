# @future-widget-lab/ui-keys

A helper for creating render-friendly keys, useful for uniquely identifying resources, caching, testing, and rendering. Generated keys can also be parsed back into their original components.

## Features

- Generates structured, deterministic keys for various use cases.
- Supports strings, numbers, booleans, arrays, and objects.
- Converts nullish values into a standard placeholder (`"unknown"`).
- Provides a parser (`parseUiKey`) to revert keys back to their original components.

## Installation

```sh
npm install @future-widget-lab/ui-keys
```

## Usage

### Creating a UI Key

```typescript
import { createUiKey } from '@future-widget-lab/ui-keys';

const key1 = createUiKey('user', 42);
console.log(key1); // "user::42"

const key2 = createUiKey('post', { id: 123, category: 'tech' });
console.log(key2); // "post::@{"id":123,"category":"tech"}"
```

### Parsing a UI Key

```typescript
import { parseUiKey } from '@future-widget-lab/ui-keys';

const parsedKey = parseUiKey(`post::@{"id":123,"category":"tech"}`);
console.log(parsedKey); // ["post", { id: 123, category: "tech" }]
```

## API Reference

### `createUiKey(...args: unknown[]): string`

Generates a structured key from the provided arguments.

- Strings, numbers, and booleans are converted to their string representations.
- Objects and arrays are serialized using `flatted`.
- Nullish values (like `null` and `undefined`) are replaced with `"unknown"`.

#### Parameters

| Parameter | Type        | Description                                 |
| --------- | ----------- | ------------------------------------------- |
| `...args` | `unknown[]` | Values to be included in the generated key. |

### `parseUiKey(key: string): unknown[]`

Parses a UI key back into its original components.

- Splits the key into its original components.
- Converts numeric and boolean values back to their types.
- Parses objects and arrays serialized with `flatted`.
- `"unknown"` is converted to `null`.

#### Parameters

| Parameter | Type     | Description              |
| --------- | -------- | ------------------------ |
| `key`     | `string` | The UI key to be parsed. |

## License

MIT
