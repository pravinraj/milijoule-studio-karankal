import React from 'react';
import Data from '../components/category/Data';
import ProjectPage from '../components/category/ProjectPage';
import contactOptions from '../components/category/contactus/ContactOptions';
let { imagesInfo, CATEGORYLIST, projectImages } = Data;

function Projects(props) {
	const {match, history} = props;
	let projects;
	console.log('match!!!!! ', match)
    if (match.params.category === 'all') {
      projects = Object.values(projectImages);
    } else {
      projects = Object.values(projectImages).filter(d =>
        d.categoryTypes.includes(match.params.category)
      );
    }
	return (
		<ProjectPage
	      projects={projects}
	      pageNumber={projects.findIndex(
	        d => d.realProjectName === match.params.projectName
	      )}
	      category={match.params.category}
	      screenWidth={window.screen.availWidth}
	      newPageNumber={pageNo => {
	        history.push(
	          '/category/' +
	            match.params.category +
	            '/' +
	            projects[pageNo].realProjectName
	        );
	      }}
	      contactOptions={contactOptions}
	    />
	);
}

export default Projects;