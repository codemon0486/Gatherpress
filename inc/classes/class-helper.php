<?php
/**
 * Class is responsible for all role related functionality.
 *
 * @package GatherPress
 * @subpackage Core
 * @since 1.0.0
 */

namespace GatherPress\Inc;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Helper.
 */
class Helper {

	/**
	 * Render template.
	 *
	 * @param string $path      Path to template.
	 * @param array  $variables Array of variables to pass to template.
	 *
	 * @return string
	 */
	public static function render_template( string $path, array $variables = array() ) : string {
		if ( ! file_exists( $path ) ) {
			return '';
		}

		if ( ! empty( $variables ) ) {
			extract( $variables, EXTR_SKIP ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract
		}

		ob_start();

		require $path; // better to fail with an error than to continue with incorrect/weird data.

		return ob_get_clean();
	}

	/**
	 * Returns HTML classes for an anchor.
	 *
	 * @return string
	 */
	public static function anchor_classes() : string {
		return (string) apply_filters( 'gatherpress_anchor_classes', 'text-blue-500 hover:text-blue-800' );
	}

	/**
	 * Returns HTML classes for a button.
	 *
	 * @return string
	 */
	public static function button_classes() : string {
		return (string) apply_filters( 'gp_button_classes', '' );
	}

}
