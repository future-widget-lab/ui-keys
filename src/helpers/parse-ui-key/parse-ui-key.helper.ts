import { parse } from 'flatted';

/**
 * @description
 * Use this helper to parse the generated UI key back into its original components.
 */
export const parseUiKey = (key: string): unknown[] => {
	return key.split('::').map((segment) => {
		if (segment === 'unknown') {
			return null;
		}

		if (!isNaN(Number(segment))) {
			return Number(segment);
		}

		if (segment === 'true' || segment === 'false') {
			return segment === 'true';
		}

		if (segment.startsWith('@')) {
			try {
				return parse(segment.slice(1));
			} catch {
				return segment;
			}
		}

		return segment;
	});
};
