/**
 * Date & time utility functions to abstract the `aws-sdk` away from users.
 * (v2 => v3 modularization is a breaking change)
 *
 * @see https://github.com/aws/aws-sdk-js/blob/6edf586dcc1de7fe8fbfbbd9a0d2b1847921e6e1/lib/util.js#L262
 */
export declare const DateUtils: {
	/**
	 * Milliseconds to offset the date to compensate for clock skew between device & services
	 */
	clockOffset: number;
	getDateWithClockOffset(): Date;
	/**
	 * @returns {number} Clock offset in milliseconds
	 */
	getClockOffset(): number;
	/**
	 * @param {number} offset Clock offset in milliseconds
	 */
	setClockOffset(offset: number): void;
};
