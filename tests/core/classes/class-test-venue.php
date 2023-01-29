<?php
/**
 * Class handles unit tests for GatherPress\Core\Venue.
 *
 * @package GatherPress
 * @subpackage Core
 * @since 1.0.0
 */

namespace GatherPress\Tests\Core;

use GatherPress\Core\Venue;
use PMC\Unit_Test\Base;

/**
 * Class Test_Venue.
 *
 * @coversDefaultClass \GatherPress\Core\Venue
 */
class Test_Venue extends Base {

	/**
	 * Coverage for get_venue_term_slug method.
	 *
	 * @covers ::get_venue_term_slug
	 *
	 * @return void
	 */
	public function test_get_venue_term_slug() {
		$this->assertSame( '_unit-test', Venue::get_instance()->get_venue_term_slug( 'unit-test' ) );
	}

	/**
	 * Coverage for get_venue_post_from_term_slug method.
	 *
	 * @covers ::get_venue_post_from_term_slug
	 *
	 * @return void
	 */
	public function test_get_venue_post_from_term_slug() {
		$venue                = $this->mock->post( array( 'post_type' => Venue::POST_TYPE, 'post_name' => 'unit-test' ) )->get();
		$venue_from_term_slug = Venue::get_instance()->get_venue_post_from_term_slug( '_unit-test' );

		$this->assertEquals( $venue->ID, $venue_from_term_slug->ID );
	}

}
