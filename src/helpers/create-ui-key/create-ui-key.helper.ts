import { stringify } from 'flatted';

/**
 * @description
 * Use this helper to generate a structured key from the provided arguments.
 */
export const createUiKey = (...args: Array<unknown>): string => {
  const key = args
    .flatMap((arg) => {
      return arg;
    })
    .map((arg) => {
      switch (true) {
        case typeof arg === 'string': {
          return arg;
        }

        case (typeof arg === 'number' && !Number.isNaN(arg)) ||
          typeof arg === 'boolean': {
          return arg.toString();
        }

        case Array.isArray(arg) || (typeof arg === 'object' && arg !== null): {
          return `@${stringify(arg)}`;
        }

        default: {
          return 'unknown';
        }
      }
    })
    .join('::');

  return key;
};
