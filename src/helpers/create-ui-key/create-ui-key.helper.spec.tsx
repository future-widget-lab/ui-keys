import { createUiKey } from './create-ui-key.helper';

describe('Unit | Helper | createUiKey', () => {
  it.each([
    {
      input: ['user'],
      expected: 'user',
    },
    {
      input: ['user', 1],
      expected: 'user::1',
    },
    {
      input: ['user', NaN],
      expected: 'user::unknown',
    },
    {
      input: ['user', undefined],
      expected: 'user::unknown',
    },
    {
      input: ['user', null],
      expected: 'user::unknown',
    },
    {
      input: ['user', '1', 'admin'],
      expected: 'user::1::admin',
    },
    {
      input: ['user', '1', 'admin', false],
      expected: 'user::1::admin::false',
    },
    {
      input: [{ id: '1', name: 'John Doe' }],
      expected: '@[{"id":"1","name":"2"},"1","John Doe"]',
    },
    {
      input: ['user', ['admin', 'founder']],
      expected: 'user::@[["1","2"],"admin","founder"]',
    },
    {
      input: ['user', ['admin', 'founder'], { id: '1', name: 'John Doe' }],
      expected: 'user::@[["1","2"],"admin","founder"]::@[{"id":"1","name":"2"},"1","John Doe"]'
    }
  ])('should return $expected given $input', ({ input, expected }) => {
    expect(expected).toEqual(createUiKey(input));
  });
});
