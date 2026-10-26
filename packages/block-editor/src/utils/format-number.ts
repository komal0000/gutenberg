import { getSettings } from '@wordpress/date';

/**
 * Formats a number for display using the user's locale.
 *
 * @param value The number to format.
 * @return The formatted number, with locale-specific separators.
 */
export default function formatNumber( value: number ): string {
	const locale = getSettings().l10n.locale.replace( '_', '-' );
	return new Intl.NumberFormat( locale ).format( value );
}
