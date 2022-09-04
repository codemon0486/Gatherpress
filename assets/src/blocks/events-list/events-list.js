/**
 * External dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal dependencies.
 */
import EventsList from '../../components/EventsList';

const containers = document.querySelectorAll(
	`[data-gp_block_name="events-list"]`,
);

for ( let i = 0; i < containers.length; i++ ) {
	const attrs = JSON.parse( containers[ i ].dataset.gp_block_attrs );

	ReactDOM.render(
		<EventsList
			type={ attrs.type ?? 'upcoming' }
			descriptionLimit={ attrs.descriptionLimit }
			maxNumberOfEvents={ attrs.maxNumberOfEvents ?? 5 }
			topics={ attrs.topics ?? [] }
			showAttendeeList={ attrs.showAttendeeList ?? true }
			showFeaturedImage={ attrs.showFeaturedImage ?? true }
			showDescription={ attrs.showDescription ?? true }
			showRsvpButton={ attrs.showRsvpButton ?? true }
		/>,
		containers[ i ],
	);
}
