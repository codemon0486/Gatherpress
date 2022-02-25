<?php
/**
 * Past events block.
 *
 * @package GatherPress
 * @subpackage Core
 * @since 1.0.0
 */

$gatherpress_max_posts = ( isset( $attrs ) && is_array( $attrs ) && ! empty( $attrs['maxNumberOfEvents'] ) ) ? intval( $attrs['maxNumberOfEvents'] ) : 5;
$gatherpress_max_posts = ( 0 > $gatherpress_max_posts ) ? 5 : $gatherpress_max_posts;
$gatherpress_query     = \GatherPress\Core\Query::get_instance()->get_past_events( $gatherpress_max_posts );
?>
<div class="gp-past-events">
	<?php
	if ( $gatherpress_query->have_posts() ) {
		?>
		<?php
		while ( $gatherpress_query->have_posts() ) {
			$gatherpress_query->the_post();

			$gatherpress_event = new \GatherPress\Core\Event( get_the_ID() );

			?>
			<div class="gp-past-event">
				<div class="gp-past-event__header">
					<div class="gp-past-event__info">
						<div class="gp-past-event__datetime has-small-font-size">
							<strong>
								<?php echo esc_html( $gatherpress_event->get_datetime_start() ); ?>
							</strong>
						</div>
						<div class="gp-past-event__title has-large-font-size">
							<a href="<?php the_permalink(); ?>">
								<?php the_title(); ?>
							</a>
						</div>
						<div class="gp-buttons-container wp-block-buttons">
							<div class="gp-button-container wp-block-button">
								<a href="<?php the_permalink(); ?>" class="gp-button wp-block-button__link">
									<?php esc_html_e( 'Went', 'gatherpress' ); ?>
								</a>
							</div>
						</div>
					</div>
					<?php
					if ( has_post_thumbnail() ) {
						?>
						<figure class="gp-past-event__image">
							<a href="<?php the_permalink(); ?>">
								<?php the_post_thumbnail( 'medium' ); ?>
							</a>
						</figure>
						<?php
					}
					?>
				</div>
				<div class="gp-past-event__content">
					<div class="gp-past-event__excerpt">
						<?php the_excerpt(); ?>
					</div>
				</div>
				<div class="gp-past-event__footer">
				</div>
			</div>
			<?php
		}
		wp_reset_postdata();
	}
	?>
</div>
