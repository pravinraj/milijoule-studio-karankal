import React, { Component } from 'react';
import Form from './Form';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConceptLoader: props.concept !== undefined,
      selectedType: props.selectedPopupTypes
    };
  }
  componentDidMount() {
    if (this.state.showConceptLoader) {
      setTimeout(() => this.setState({ showConceptLoader: false }), 1700);
    }
  }

  getPopupDimension(
    screenWidth,
    screenHeight,
    concept,
    projectTypeList,
    selectedOption
  ) {
    let uniWidth = screenWidth > 600 ? 478 : screenWidth - 40;
    let dimension = {
      minWidth: uniWidth,
      minHeight: 249,
      maxWidth: uniWidth,
      maxHeight: screenHeight - 60
    };
    if (concept) {
      dimension.minHeight =
        ((screenWidth > 600 ? 638 : 745) / 1024) * screenHeight;
      dimension.minWidth =
        screenWidth > 600
          ? (633 / 465) * dimension.minHeight
          : screenWidth - 40;
      dimension.maxHeight =
        screenWidth > 600 ? dimension.minHeight : screenHeight - 60;
      dimension.maxWidth = dimension.minWidth;
    }
    if (selectedOption) {
      dimension.minHeight = screenWidth > 600 ? 313 : 309;
      dimension.maxHeight = dimension.minHeight;
    }
    return dimension;
  }

  render() {
    let {
      selectedOption,
      showLoader,
      emailResMessage,
      closePopUp,
      sendEmail,
      concept,
      projectTypeList
    } = this.props;
    let { selectedType } = this.state;
    let screenWidth = window.screen.availWidth;
    let screenHeight = document.documentElement.clientHeight;
    return (
      <div
        className={
          'popup' +
          (selectedOption || emailResMessage || concept || projectTypeList
            ? ' is-visible'
            : '')
        }
        role="alert"
      >
        <div className="relative">
          <div
            className="popup-container"
            style={this.getPopupDimension(
              screenWidth,
              screenHeight,
              concept,
              projectTypeList,
              selectedOption
            )}
          >
            {(concept || emailResMessage) && (
              <a
                style={{
                  position: 'absolute',
                  padding: '12px 25px',
                  fontSize: '17px',
                  lineHeight: 1.4,
                  fontFamily: 'Proxima Nova Lt',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  width: '100%',
                  bottom: '0px',
                  cursor: 'pointer',
                  left: '0px',
                  color: '#f44336',
                  textAlign: 'right'
                }}
                onClick={e => closePopUp()}
              >
                Close
              </a>
            )}
            {concept && (
              <div
                style={{
                  position: 'fixed',
                  padding: screenWidth > 600 ? '16px 32px' : '12px 25px',
                  fontSize: screenWidth > 600 ? '28px' : '20px',
                  lineHeight: 1.4,
                  fontFamily: 'Proxima Nova Lt',
                  borderBottom: '1px solid rgba(151, 151, 151, 0.2)',
                  zIndex: 4,
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                {concept.key}
              </div>
            )}
            {concept && (
              <div
                id="conceptScroller"
                style={{
                  position: 'absolute',
                  textAlign: 'left',
                  zIndex: 3,
                  fontSize: '17px',
                  maxHeight:
                    screenWidth > 600
                      ? 'calc(100% - 119px)'
                      : 'calc(100% - 100px)',
                  overflowY: 'scroll',
                  color: '#000',
                  top: (screenWidth > 600 ? 72 : 53) + 'px',
                  left: '0px',
                  width: '100%',
                  fontWeight: 300,
                  lineHeight: 1.29
                }}
              >
                <img
                  src={concept.img}
                  alt={'concept'}
                  style={{
                    width: 'inherit',
                    height: 'auto'
                    // height:
                    //   screenWidth > 600
                    //     ? 'calc(100% - 173px)'
                    //     : 'calc(100% - 142px)'
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    textAlign: 'left',
                    padding:
                      screenWidth > 600 ? '20px 33px 0px' : '10px 25px 0px',
                    width:
                      'calc(100% -' +
                      (screenWidth > 600 ? '64px' : '48px') +
                      ')'
                  }}
                >
                  {concept.descr}
                </div>
              </div>
            )}
            {screenWidth < 600 &&
              projectTypeList && (
                <div style={{ padding: '20px' }}>
                  <div
                    className="Category-page-title"
                    style={{ margin: '0px' }}
                  >
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
                            onClick={e =>
                              this.setSelectedType(selectedType, type)
                            }
                          >
                            {type}
                          </div>
                        );
                      })}
                  </div>

                  <ul className="buttons projectTypeList">
                    <li>
                      <a
                        onClick={e => this.setSelectedType(selectedType, 'all')}
                      >
                        Reset
                      </a>
                    </li>
                    <li>
                      <a onClick={e => closePopUp()}>Done</a>
                    </li>
                  </ul>
                </div>
              )}
            <div className=" centered" style={{ width: 'inherit' }}>
              {emailResMessage &&
                !concept && (
                  <div className="email-response-message">
                    <img
                      src={emailResMessage.imgLink}
                      alt={emailResMessage.title}
                    />
                    <div
                      style={
                        emailResMessage.success ? {} : { color: '#e53935' }
                      }
                    >
                      {emailResMessage.title}
                    </div>
                    <div>{emailResMessage.descr}</div>
                  </div>
                )}
              {!emailResMessage &&
                !concept &&
                selectedOption && (
                  <div>
                    <Form name={'contactForm'} formList={[]} />
                    <ul className="buttons">
                      <li>
                        <a onClick={e => sendEmail(selectedOption)}>Submit</a>
                      </li>
                      <li>
                        <a onClick={e => closePopUp()}>Cancel</a>
                      </li>
                    </ul>
                  </div>
                )}
              {(showLoader || this.state.showConceptLoader) && (
                <div className="centered">
                  <div className="loadersmall" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
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
        this.props.handleSelectedType &&
          this.props.handleSelectedType(selectedType);
        // window.scrollTo(0, 0);
      }
    );
  };
}

export default Popup;
