import React from 'react';
import icons from '../../images/category/icons/icons';
import Carousel from 'nuka-carousel';
import ContactUs from './contactus/ContactUs';

let {
  backArrow,
  carouselLeft,
  carouselRight,
  backArrowDisabled,
  forwardArrow,
  forwardArrowDisabled
} = icons;

function getSelectedType(props) {
  let selectedType = 'process';
  if (props.projects && props.projects[props.pageNumber].imageTypes) {
    let imageTypesLength = props.projects[props.pageNumber].imageTypes.length;
    selectedType =
      imageTypesLength === 1
        ? props.projects[props.pageNumber].imageTypes[0]
        : 'process';
  }
  return selectedType;
}

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: props.pageNumber,
      projects: props.projects,
      screenWidth: props.screenWidth || window.screen.availWidth,
      selectedType: getSelectedType(props),
      slideIndex: 0,
      moreDescrClicked: false
    };
  }

  componentWillUpdate() {
    let scrollTo = this.state.scrollTo;
    if (scrollTo && document.getElementById(scrollTo)) {
      this.setState(
        {
          scrollTo: undefined
        },
        () => {
          document.getElementById(scrollTo).scrollIntoView({
            block: 'end',
            behaviour: 'smooth',
            inline: 'start'
          });
        }
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    let { screenWidth, projects, pageNumber } = this.state;
    if (nextProps.projects && projects !== nextProps.projects) {
      this.setState({
        projects: nextProps.projects
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
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let rightDecorators = document.getElementsByClassName(
      'slider-control-centerright'
    );
    rightDecorators &&
      Array.prototype.slice.call(rightDecorators).map((decorator, index) => {
        let elm = decorator.getElementsByTagName('button')[0];
        elm.innerHTML =
          '<img src="' + carouselRight + "\" alt='carouselRight'>";
      });
    let leftDecorators = document.getElementsByClassName(
      'slider-control-centerleft'
    );
    leftDecorators &&
      Array.prototype.slice.call(leftDecorators).map(decorator => {
        let elm = decorator.getElementsByTagName('button')[0];
        elm.innerHTML = '<img src="' + carouselLeft + "\" alt='carouselLeft'>";
      });

    let clientDescriptions = document.getElementsByClassName(
      'client-description'
    );
    clientDescriptions &&
      this.setState({
        readMoreBtnRequired:
          clientDescriptions[0].getBoundingClientRect().height > 17 * 1.29 * 4,
        clientDescrHeight: 17 * 1.29 * 4
      });
  }

  handleArrowClick(pageNumber, increment) {
    this.setState(
      {
        pageNumber: pageNumber + increment
      },
      () => {
        this.props.newPageNumber &&
          this.props.newPageNumber(pageNumber + increment);
      }
    );
  }

  handleOtherMediaClick = type => {
    document
      .getElementById('otherMedia')
      .scrollIntoView({ block: 'end', behaviour: 'smooth', inline: 'start' });
    this.setState({
      selectedType: type
    });
  };

  render() {
    let {
      selectedType,
      projects,
      pageNumber,
      moreDescrClicked,
      readMoreBtnRequired,
      clientDescrHeight,
      screenWidth
    } = this.state;
    let projectLength = projects.length;
    let {
      projectName,
      projectImages,
      processImages,
      media,
      clientInfo,
      projectDescr,
      imageTypes,
      specialProcessImage
    } = projects[pageNumber];
    return (
      <div
        className="Project-container"
        style={{ minHeight: window.screen.availHeight + 'px' }}
      >
        <div className="Project-header">
          <div>
            {projectLength > 1 && (
              <img
                src={pageNumber !== 0 ? backArrow : backArrowDisabled}
                alt={'back arrow'}
                className={'arrow left ' + (pageNumber === 0 && ' disabled')}
                onClick={() =>
                  pageNumber !== 0 && this.handleArrowClick(pageNumber, -1)
                }
              />
            )}
            {projectName}
            {projectLength > 1 && (
              <img
                src={
                  pageNumber + 1 !== projectLength
                    ? forwardArrow
                    : forwardArrowDisabled
                }
                alt={'forward arrow'}
                className={
                  'arrow right ' +
                  (pageNumber + 1 === projectLength && 'disabled')
                }
                onClick={() =>
                  pageNumber + 1 !== projectLength &&
                  this.handleArrowClick(pageNumber, 1)
                }
              />
            )}
          </div>
        </div>
        <div className="Project-page">
          {projectImages &&
            projectImages.image && (
              <Carousel
                renderBottomLeftControls={({ currentSlide, slideCount }) => (
                  <div>
                    <div className="slide-count">
                      Slide: {currentSlide + 1 + '/' + slideCount}
                    </div>
                    <div className="slide-name">
                      {projectImages.imageNames
                        ? projectImages.imageNames[currentSlide + 1]
                        : ''}
                    </div>
                  </div>
                )}
                easing={'easeLinear'}
                edgeEasing={'easeLinear'}
                slideIndex={this.state.slideIndex}
                afterSlide={slideIndex => this.setState({ slideIndex })}
              >
                {projectImages.image.map((link, index) => {
                  return <img src={link} key={index} alt={link + 'image'} />;
                })}
              </Carousel>
            )}
          <div
            className={
              'row client-info ' +
              (imageTypes && imageTypes.length > 0 ? 'borderBottom' : '')
            }
            style={{ fontSize: '17px', lineHeight: '1.29' }}
          >
            <div className="col-m-4 client-name">
              {
                //<div>{clientInfo[0]}</div>
              }
              <div>{clientInfo[1]}</div>
            </div>
            <div className={'col-m-8 client-description '}>
              <div
                style={{
                  maxHeight: moreDescrClicked
                    ? 'none'
                    : clientDescrHeight + 'px',
                  overflow: 'hidden'
                }}
              >
                {projectDescr.map((text, i) => (
                  <div key={i}>
                    <div>{text}</div>
                    <br />
                  </div>
                ))}
              </div>
              {readMoreBtnRequired &&
                !moreDescrClicked && (
                  <div
                    className="more"
                    onClick={() => this.setState({ moreDescrClicked: true })}
                  >
                    Read More
                  </div>
                )}
              {readMoreBtnRequired &&
                moreDescrClicked && (
                  <div
                    className="more"
                    onClick={() => this.setState({ moreDescrClicked: false })}
                  >
                    Less
                  </div>
                )}
            </div>
          </div>
          {imageTypes &&
            imageTypes.length > 0 && (
              <div id="otherMedia">
                {
                  <div className="Project-page-title custom-title">
                    {imageTypes &&
                      imageTypes.map((type, index) => {
                        let className =
                          selectedType.toUpperCase() === type.toUpperCase()
                            ? ' selected-title '
                            : ' hovered-title ';
                        return (
                          <div
                            key={index}
                            className={className}
                            onClick={() => this.handleOtherMediaClick(type)}
                          >
                            {type}
                          </div>
                        );
                      })}
                  </div>
                }
                {processImages &&
                  selectedType === 'process' &&
                  imageTypes.includes('process') &&
                  processImages.image &&
                  processImages.image.length > 0 && (
                    <Carousel
                      easing={'easeLinear'}
                      edgeEasing={'easeLinear'}
                      afterSlide={e => this.setState({ curretSlide: e })}
                      renderBottomLeftControls={({
                        currentSlide,
                        slideCount
                      }) => (
                        <div>
                          <div className="slide-count">
                            Slide: {currentSlide + 1 + '/' + slideCount}
                          </div>
                          <div className="slide-name">
                            {processImages.imageNames
                              ? processImages.imageNames[currentSlide + 1]
                              : ''}
                          </div>
                        </div>
                      )}
                    >
                      {processImages.image.sort().map((link, index) => {
                        return (
                          <img
                            src={link}
                            key={index}
                            alt={link + index + 'image'}
                          />
                        );
                      })}
                    </Carousel>
                  )}
                {selectedType === 'process' &&
                  imageTypes.includes('process') &&
                  specialProcessImage && (
                    <div
                      className={screenWidth > 600 ? 'slider-frame' : 'slider'}
                    >
                      <img
                        src={specialProcessImage}
                        alt={'specialProcessImage'}
                      />
                    </div>
                  )}
                {selectedType === 'media' &&
                  imageTypes.includes('media') &&
                  media.video &&
                  media.video.length > 0 && (
                    <div
                      style={screenWidth < 600 ? { padding: '0px 20px' } : {}}
                    >
                      <video width={'100%'} height={'auto'} autoPlay loop>
                        <source src={media.video[0]} type="video/mp4" />
                      </video>
                    </div>
                  )}
                {selectedType === 'media' &&
                  imageTypes.includes('media') &&
                  media.image && (
                    <Carousel
                      easing={'easeLinear'}
                      edgeEasing={'easeLinear'}
                      afterSlide={e => this.setState({ curretSlide: e })}
                      renderBottomLeftControls={({
                        currentSlide,
                        slideCount
                      }) => (
                        <div>
                          <div className="slide-count">
                            Slide: {currentSlide + 1 + '/' + slideCount}
                          </div>
                          <div className="slide-name">
                            {media.imageNames
                              ? media.imageNames[currentSlide + 1]
                              : ''}
                          </div>
                        </div>
                      )}
                    >
                      {media.image.sort().map((link, index) => {
                        return (
                          <img
                            src={link}
                            key={index}
                            alt={link + index + 'image'}
                          />
                        );
                      })}
                    </Carousel>
                  )}
              </div>
            )}
          <ContactUs
            screenWidth={screenWidth}
            options={this.props.contactOptions}
          />
        </div>
      </div>
    );
  }
}

export default ProjectPage