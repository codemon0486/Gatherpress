<?php
/**
 * Admin Notice for open membership check.
 *
 * @package GatherPress\Core
 * @since 1.0.0
 */

?>
	<div class="notice notice-warning is-dismissible" id="gp-membership">
		<p>
			<?php
				/* translators: %s: search term */
				printf(
					'%s <a href=%s>%s</a>. <a href=%s><button>Dismiss forever</button></a>',
					esc_html__( 'To ensure GatherPress functions optimally, we recommend enabling user registration. You can do so by', 'gatherpress' ),
					esc_url( admin_url( 'options-general.php#users_can_register' ) ),
					esc_html__( 'enabling user registration here', 'gatherpress' ),
					esc_url( wp_nonce_url( add_query_arg( 'action', 'suppress_gp_membership_notification' ), 'clear-notification' ) )
				);
				?>
		</p>
	</div>
<?php
