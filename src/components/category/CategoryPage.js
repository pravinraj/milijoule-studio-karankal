import React, { Component } from 'react';
import icons from '../../images/category/icons/icons';
import contactOptions from './contactus/ContactOptions';
import ContactUs from './contactus/ContactUs';
import Popup from './Popup';

let {
  backArrow,
  backArrowDisabled,
  forwardArrow,
  forwardArrowDisabled
} = icons;

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      categoryPageInfo: props.categoryPageInfo,
      screenWidth: window.screen.availWidth,
      selectedType: ['all'],
      selectedPopupTypes: props.selectedPopupTypes,
      hoveredImg: undefined
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    let {
      screenWidth,
      categoryPageInfo,
      pageNumber,
      selectedPopupTypes
    } = this.state;
    if (
      nextProps.categoryPageInfo &&
      categoryPageInfo !== nextProps.categoryPageInfo
    ) {
      this.setState({
        categoryPageInfo: nextProps.categoryPageInfo
      });
    }
    if (screenWidth !== nextProps.screenWidth) {
      this.setState({
        screenWidth: nextProps.screenWidth
      });
    }
    if (pageNumber !== nextProps.pageNumber) {
      this.setState({
        pageNumber: nextProps.pageNumber
      });
    }
    if (selectedPopupTypes !== nextProps.selectedPopupTypes) {
      this.setState({
        selectedPopupTypes: nextProps.selectedPopupTypes
      });
    }
  }

  handleArrowClick(pageNumber, increment) {
    this.setState(
      {
        pageNumber: pageNumber + increment,
        selectedType: ['all']
      },
      () => {
        this.props.newPageNumber &&
          this.props.newPageNumber(pageNumber + increment);
      }
    );
  }

  getImageList(projectTypeList, projectTypes, selectedType) {
    let imageList = [];
    selectedType.map(type => {
      imageList = imageList.concat(
        Object.keys(projectTypes[type]).map(item => {
          if (!imageList.includes(projectTypes[type][item])) {
            return projectTypes[type][item];
          }
        })
      );
    });
    return imageList;
  }

  render() {
    let {
      imgCliked,
      showTypePopup,
      handleSelectedType,
      closePopup,
      resetPopup,
      newPageNumber
    } = this.props;
    let {
      screenWidth,
      selectedType,
      categoryPageInfo,
      hoveredImg,
      pageNumber,
      selectedProject,
      selectedPopupTypes
    } = this.state;
    let categoryList = Object.keys(categoryPageInfo).sort();
    let catLength = categoryList.length;
    let projectTypes = categoryPageInfo[categoryList[pageNumber]];
    console.log('categoryPageInfo!!!!!!!!! ', categoryPageInfo)
    console.log('categoryList!!!!!!!!! ', categoryList)
    console.log('pageNumber!!!!!!!!! ', pageNumber)
    console.log('newPageNumber!!!!!!!!! ', newPageNumber)
    console.log('projectTypes!!!!!!!!!!!!! ', projectTypes)
    let category = categoryList[pageNumber];
    let projectTypeList = Object.keys(projectTypes);
    projectTypeList.splice(projectTypeList.indexOf('all'), 1);
    projectTypeList.unshift('all');
    let imageList = this.getImageList(
      projectTypeList,
      projectTypes,
      screenWidth > 600 ? selectedType : selectedPopupTypes
    );
    return (
      <div className="Category-container">
        {showTypePopup && (
          <Popup
            projectTypeList={projectTypeList}
            closePopUp={closePopup}
            handleSelectedType={handleSelectedType}
            selectedPopupTypes={selectedPopupTypes}
          />
        )}
        <div className="About-us-header">
          {
            <div className="Project-page-title">
              {categoryList.map((type, index) => {
                let className =
                  category.toUpperCase() === type.toUpperCase()
                    ? ' selected-title '
                    : ' hovered-title ';
                return (
                  <div
                    key={index}
                    className={className}
                    onClick={() =>
                      this.setState(
                        {
                          pageNumber: index,
                          selectedType: ['all'],
                          selectedPopupTypes: ['all']
                        },
                        () => {
                          handleSelectedType && handleSelectedType(['all']);
                          newPageNumber && newPageNumber(index);
                        }
                      )
                    }
                  >
                    {type}
                  </div>
                );
              })}
            </div>
          }
        </div>
        {
          // <div className="Category-header">
          //   <div>
          //     {catLength > 1 && (
          //       <img
          //         src={pageNumber !== 0 ? backArrow : backArrowDisabled}
          //         alt={'back arrow'}
          //         className={'arrow left ' + (pageNumber === 0 && ' disabled ')}
          //         onClick={() =>
          //           pageNumber !== 0 && this.handleArrowClick(pageNumber, -1)
          //         }
          //       />
          //     )}
          //     {category}
          //     {catLength > 1 && (
          //       <img
          //         src={
          //           pageNumber + 1 !== catLength
          //             ? forwardArrow
          //             : forwardArrowDisabled
          //         }
          //         alt={'forward arrow'}
          //         className={
          //           'arrow right ' + (pageNumber + 1 === catLength && ' disabled')
          //         }
          //         onClick={() =>
          //           pageNumber + 1 !== catLength &&
          //           this.handleArrowClick(pageNumber, 1)
          //         }
          //       />
          //     )}
          //   </div>
          // </div
        }
        <div
          className="Category-page"
          // style={{ paddingTop: this.setPaddingTop(screenWidth)}}
        >
          {
            // screenWidth < 600 &&
            // <form className="category-page-form">
            //   <label>Filter:</label>
            //   <select
            //     // size="6"
            //     // multiple
            //     autoFocus={false}
            //     id="type"
            //     name=""
            //     multiple
            //     onChange={e =>
            //       this.setSelectedType(selectedType, e.target.value)
            //     }
            //   >
            //     {projectTypeList &&
            //       projectTypeList.map((type, index) => {
            //         return (
            //           <option key={index} value={type.toLowerCase()}>
            //             {type}
            //           </option>
            //         );
            //       })}
            //   </select>
            // </form>
          }
          {screenWidth > 600 && (
            <div className="Category-page-title">
              {projectTypeList &&
                projectTypeList.map((type, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        selectedType.includes(type.toLowerCase())
                          ? 'selected-title-category'
                          : ''
                      }
                      onClick={e => this.setSelectedType(selectedType, type)}
                    >
                      {type}
                    </div>
                  );
                })}
            </div>
          )}
          <div className="row">
            {imageList &&
              imageList.map((image, index) => {
                let imgElement = image && (
                  <div
                    className={
                      'col-4-h col-m-6 col-s-6 ' +
                      (screenWidth > 767 ? ' hvr-grow ' : '')
                    }
                    key={index}
                    style={screenWidth < 767 ? { paddingBottom: '10px' } : {}}
                  >
                    <div
                      style={
                        screenWidth < 767
                          ? {
                              boxShadow:
                                '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
                              borderRadius: '2px'
                            }
                          : {}
                      }
                    >
                      <img
                        src={image.projectImage}
                        alt={category + index + 'image'}
                        onMouseOver={e => this.handleImageHover(e, image)}
                        onClick={() =>
                          imgCliked && imgCliked(image.realProjectName)
                        }
                      />
                      <div
                        onMouseLeave={() =>
                          this.setState({ hoveredImg: undefined })
                        }
                      >
                        {screenWidth > 767 &&
                          hoveredImg === image && (
                            <div
                              className={' image-layer fadeIn animated '}
                              onClick={() =>
                                imgCliked && imgCliked(image.realProjectName)
                              }
                            />
                          )}
                        {(screenWidth > 767
                          ? hoveredImg === image
                          : screenWidth < 767) && (
                          <div
                            className={
                              ' image-description ' +
                              (screenWidth < 767
                                ? ' image-description-mobile '
                                : ' hvr-text-grow')
                            }
                            onClick={() =>
                              imgCliked && imgCliked(image.realProjectName)
                            }
                          >
                            <div>{image.projectName}</div>
                            {
                              // <div>{image.clientInfo && image.clientInfo[0]}</div>
                            }
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
                return imgElement;
              })}
          </div>
          <div id="contact">
            <ContactUs screenWidth={screenWidth} options={contactOptions} />
          </div>
        </div>
      </div>
    );
  }

  setPaddingTop(screenWidth) {
    if (screenWidth > 600) {
      // let height = document.get
    }
  }

  setSelectedType = (selectedType, type) => {
    if (selectedType.includes(type.toLowerCase())) {
      selectedType.splice(selectedType.indexOf(type.toLowerCase()), 1);
    } else {
      selectedType = selectedType.concat([type.toLowerCase()]);
    }
    if (selectedType.includes('all') && selectedType.length > 1) {
      selectedType.splice(selectedType.indexOf('all'), 1);
    }
    if (selectedType.length === 0) {
      selectedType.push('all');
    }
    if (type.toLowerCase() === 'all') {
      selectedType = ['all'];
    }
    this.setState(
      {
        selectedType
      },
      () => {
        window.scrollTo(0, 0);
      }
    );
  };

  handleImageHover(e, image) {
    // let rect = e.target.getBoundingClientRect();
    // if(rect && rect.top > 180) {
    this.setState({
      hoveredImg: image
    });
    // }
  }
}

export default CategoryPage;