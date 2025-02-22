import { parseUiKey } from './parse-ui-key.helper';

describe('Unit | Helper | parseUiKey', () => {
	it.each([
		{
			input: 'user',
			expected: ['user']
		},
		{
			input: 'user::1',
			expected: ['user', 1]
		},
		{
			input: 'user::unknown',
			expected: ['user', null]
		},
		{
			input: 'user::1::admin',
			expected: ['user', 1, 'admin']
		},
		{
			input: 'user::1::admin::false',
			expected: ['user', 1, 'admin', false]
		},
		{
			input: '@[{"id":"1","name":"2"},"1","John Doe"]',
			expected: [{ id: '1', name: 'John Doe' }]
		},
		{
			input: 'user::@[["1","2"],"admin","founder"]',
			expected: ['user', ['admin', 'founder']]
		},
		{
			input: 'user::@[["1","2"],"admin","founder"]::@[{"id":"1","name":"2"},"1","John Doe"]',
			expected: ['user', ['admin', 'founder'], { id: '1', name: 'John Doe' }]
		}
	])('should return $expected given $input', ({ input, expected }) => {
		expect(expected).toEqual(parseUiKey(input));
	});
});
