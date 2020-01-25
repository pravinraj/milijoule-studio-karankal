import React from 'react';
import CategoryPage  from '../components/category/CategoryPage';
import Data from '../components/category/Data';

let { imagesInfo, CATEGORYLIST, projectImages } = Data;

const Category = (props) => {
	const {
		match,
	    history,
	    showTypePopup,
	    handleSelectedType,
	    selectedPopupTypes,
	    resetPopup,
	    closePopup
	} = props;
	return (
		<>
			<CategoryPage
				screenWidth={window.screen.availWidth}
				newPageNumber={pageNo => 
			      history.push('/category/' + Object.keys(imagesInfo).sort()[pageNo])
			    }
			    pageNumber={Object.keys(imagesInfo)
			      .sort()
			      .indexOf(match.params.category)}
			    categoryPageInfo={imagesInfo}
			    showTypePopup={showTypePopup}
			    handleSelectedType={d => handleSelectedType(d)}
			    selectedPopupTypes={selectedPopupTypes}
			    resetPopup={d => resetPopup(d)}
			    closePopup={d => closePopup()}
			    imgCliked={projectName => history.push(match.url + '/' + projectName)}
			/>
		</>
	)
}

export default Category