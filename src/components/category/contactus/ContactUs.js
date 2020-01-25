import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Form from '../Form';
import ImageLinks from '../../../images/category/images';
import Select from 'react-select';
// import Client from './Client';
import Popup from '../Popup';
// import 'react-select/dist/react-select.css';

let { logos, emailImages } = ImageLinks;
let { wave, down } = emailImages;
const MAX_MENU_HEIGHT = window.screen.availWidth > 600 ? 252 : 210;
const AVG_OPTION_HEIGHT = window.screen.availWidth > 600 ? 42 : 38;

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.screen.availWidth,
      selectedOption: undefined,
      dropUp: false,
      showLoader: false,
      emailResMessage: undefined,
      firedOnce: false
    };
    this.determineDropUp = this.determineDropUp.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.determineDropUp(this.props);
    window.addEventListener('resize', this.determineDropUp);
    window.addEventListener('scroll', this.determineDropUp);
  }

  componentWillReceiveProps(nextProps) {
    this.determineDropUp(nextProps);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.determineDropUp);
    window.removeEventListener('scroll', this.determineDropUp);
  }

  determineDropUp(props = {}) {
    const options = props.options || this.props.options || [];
    const node = findDOMNode(this.selectInst);

    if (!node) return;

    const windowHeight = window.innerHeight;
    const menuHeight = Math.min(
      MAX_MENU_HEIGHT,
      options.length * AVG_OPTION_HEIGHT
    );
    const instOffsetWithMenu = node.getBoundingClientRect().bottom + menuHeight;

    this.setState({
      dropUp: instOffsetWithMenu + 60 >= windowHeight
    });
  }

  render() {
    return (
      <div id={'contact'} className="Contact-us">
        <div>Contact Us</div>
        <div
          className={
            'row ' + +(this.props.headerContactUsClicked ? 'hide' : '')
          }
        >
          {this.getContactUsPageNew()}
        </div>
      </div>
    );
  }

  closePopUp() {
    this.setState(
      {
        selectedOption: undefined,
        emailResMessage: undefined
      },
      () => {
        this.props.headerContactUsClicked && this.props.popupClosed(true);
      }
    );
  }

  validateEmail(email) {
    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailCheck.test(String(email).toLowerCase());
  }

  sendEmail = selectedOption => {
    let formData = {};
    let inputs = document.forms['contactForm'].getElementsByTagName('input');
    Array.prototype.slice.call(inputs).map(input => {
      formData[input.id] = input.value;
    });
    formData.subject = selectedOption.value;
    formData.senderEmail = formData.email;
    let bool = true;
    bool =
      bool &&
      formData.name.length > 0 &&
      formData.phone.length === 10 &&
      this.validateEmail(formData.email) !== false;
    if (bool) {
      this.setState({
        showLoader: true
      });
      formData.company = 'Studio Karankal';
      window.emailjs
        .send('mailgun', process.env.REACT_APP_EMAILJS_TEMPLATEID, formData)
        .then(res => {
          this.setState(
            {
              emailResMessage: {
                imgLink: wave,
                title: 'Thanks',
                descr: 'Thanks for connecting with Us. Will get back soon.',
                success: true
              },
              selectedOption: undefined,
              showLoader: false,
              firedOnce: true
            },
            () => {
              setTimeout(
                () => this.setState({ emailResMessage: undefined }),
                5000
              );
            }
          );
        })
        .catch(err => {
          console.error('Failed to send feedback. Error: ', err);
          this.setState(
            {
              emailResMessage: {
                imgLink: down,
                title: 'Email Sending Failed',
                descr:
                  'There is an error in the form fields, check your inputs in the form',
                success: false
              },
              selectedOption: undefined,
              showLoader: false,
              firedOnce: true
            },
            () => {
              setTimeout(
                () => this.setState({ emailResMessage: undefined }),
                5000
              );
            }
          );
        });
    }
  };

  // validateEmail(x) {
  //   let atpos = x.indexOf('@');
  //   let dotpos = x.lastIndexOf('.');
  //   if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
  //     return false;
  //   }
  // }

  handleChange = selectedOption => {
    this.setState({
      selectedOption
    });
  };

  getContactUsPageNew() {
    let {
      selectedOption,
      emailResMessage,
      dropUp,
      showLoader,
      firedOnce
    } = this.state;
    let className = dropUp ? 'drop-up' : '';
    return [
      <div className="col-m-12 col-s-12 address" key={'contact-2'}>
        <iframe
          title="map"
          src="https://goo.gl/UJkbS5"
          frameBorder={0}
          allowFullScreen
        />
        {this.state.screenWidth < 600 && (
          <div style={{ textAlign: 'left' }}>
            <div>Studio Karankal</div>
            <div>#66, 8th B Main Rd, Jakasandra Block,</div>
            <div>Koramangla 3rd Block </div>
            <div>Bangalore, Karnataka 560034</div>
            <div>Contact : +91 7829475707</div>
          </div>
        )}
      </div>,
      <div className={'col-m-12 col-s-12 contact-form'} key={'contact-1'}>
        <div>
          {!this.props.headerContactUsClicked && (
            <Select
              options={this.props.options}
              searchable={false}
              className={className}
              ref={inst => (this.selectInst = inst)}
              onChange={this.handleChange}
              placeholder="Contact Us"
            />
          )}
          <Popup
            selectedOption={
              this.props.headerContactUsClicked && !firedOnce
                ? {
                    value: 'Contact us',
                    label: 'Contact us'
                  }
                : selectedOption
            }
            emailResMessage={emailResMessage}
            closePopUp={e => this.closePopUp()}
            sendEmail={opt => this.sendEmail(opt)}
            concept={undefined}
            showLoader={showLoader}
          />
          {!this.props.headerContactUsClicked && (
            <div className="social-medial-logo-icons">
              {logos.images &&
                Object.keys(logos.images).map((key, index) => {
                  return (
                    <a
                      target="_blank"
                      key={index}
                      href={logos.links && logos.links[key]}
                    >
                      <img src={logos.images[key]} alt={key + ' logo'} />
                    </a>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    ];
  }

  getContactUsPage() {
    let formPage = [
      <div className={'col-m-6 col-s-6'} key={'contact-1'}>
        <Form formList={[]} />
        <div className="social-medial-logo-icons">
          {logos.map((logo, index) => {
            return <img src={logo} key={index} alt="map img" />;
          })}
        </div>
      </div>,
      <div className="col-m-6 col-s-6 address" key={'contact-2'}>
        <iframe
          title="map"
          src="https://goo.gl/UJkbS5"
          frameBorder={0}
          allowFullScreen
        />
        <div>Studio Karankal</div>
        <div>#66, 8th B Main Rd, Jakasandra Block,</div>
        <div>Koramangla 3rd Block </div>
        <div>Bangalore, Karnataka 560034</div>
        <div>Contact : +91 7829475707</div>
      </div>
    ];
    return this.state.screenWidth > 600 ? formPage : formPage.reverse();
  }
}

export default ContactUs;
