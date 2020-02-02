import React from  'react';
import {
	Col,
	Row,
	ResponsiveEmbed
} from 'react-bootstrap';

function Story() {
	return (
		<div className='story-wrapper'>
			<Row>
				<Col>
					<p className='story-heading'>Story</p>
					<div className='video-style'>
					  <ResponsiveEmbed aspectRatio="16by9">
					    <embed type="video/mp4" src='https://player.vimeo.com/video/388785172' />
					  </ResponsiveEmbed>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Story;