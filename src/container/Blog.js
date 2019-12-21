import React from 'react';

function Blog() {
	const screenWidth = window.screen.width;
	return (
		<div>
			<iframe
				title='studio-blog'
				id='blog-wrapper'
                src="https://studiokarankal.wordpress.com/"
                frameBorder={0}
               	allowfullscreen="true"
               	webkitallowfullscreen="true" 
               	mozallowfullscreen="true" 
               	sandbox = "allow-scripts"
                style={{
                  width: screenWidth + 'px',
                  height: document.documentElement.clientHeight + 'px',
                  paddingTop: screenWidth > 782 ? '28px' : '15px'
                }}
                scrolling={'yes'}
                align={'left'}
                target="iframe_blog"
          	/>
        </div>
	);
}

export default Blog;