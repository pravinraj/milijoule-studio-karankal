import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactUs  from '../components/category/contactus/ContactUs';
import contactOptions  from '../components/category/contactus/ContactOptions';
import aboutus from '../components/about-us/AboutUs';
let { firm, team, expertise } = aboutus;

const PAGESTATES = ['team', 'expertise', 'firm'];
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: props.selectedState || 'team'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedState !== this.state.selectedState) {
      this.setState({
        selectedState: nextProps.selectedState
      });
    }
  }

  getFirmHTML(firm) {
    return (
      <div>
        <img className="page-image" src={firm.pageImage} alt="page" />
        <div className="state-page">
          {firm.aboutFirm.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  padding: '40px 0px',
                  borderBottom: '0.5px solid rgba(0, 0, 0, 0.14)'
                }}
              >
                <div className={'text'}>{item.text}</div>
                <div style={{ padding: '0px' }}>
                  {item.subText.map((datum, index) => {
                    return (
                      <div key={index} className="subText">
                        {datum}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getTeamHTML(team) {
    let screenWidth = window.screen.availWidth;
    return (
      <div>
        {
          // <img className="page-image" src={team.pageImage} alt="page" />
        }
        <div className="state-page">
          <div
            style={
              {
                // padding: '40px 0px',
                // borderBottom: '0.5px solid rgba(0, 0, 0, 0.14)'
              }
            }
          >
            {
              // <div className="text">{team.info.text}</div>
              // <div className="subText">{team.info.subText}</div>
            }
          </div>
          <div
            className="rahul"
            style={{
              padding: '30px 0px',
              borderBottom: '0.5px solid rgba(0, 0, 0, 0.14)'
            }}
          >
            <div className="headerText">{team.rahul.headerText}</div>
            <a href={team.rahul.link.hyperLink} target="_blank">
              <div className={screenWidth > 600 ? 'zoomIn' : ''}>
                <img
                  className="founder-image"
                  src={team.rahul.profilePic}
                  alt="team"
                />
              </div>
              <div className="name">{team.rahul.name}</div>
              <div className="designation">{team.rahul.designation}</div>
            </a>
            {team.rahul.subText &&
              team.rahul.subText.map((item, index) => {
                return (
                  <div className="subText" key={index}>
                    {item}
                  </div>
                );
              })}
            <a
              className="link"
              href={team.rahul.link.hyperLink}
              target="_blank"
            >
              {team.rahul.link.hyperText}
            </a>
          </div>
          <div
            style={{
              padding: '40px 0px',
              borderBottom: '0.5px solid rgba(0, 0, 0, 0.14)',
              fontFamily: 'Proxima Nova Rg'
            }}
          >
            <div className="headerText">{team.aboutTeam.headerText}</div>
            <div className="row">
              {team.aboutTeam.members.map((item, index) => {
                return (
                  <div
                    className=" col-4 col-s-3 col-s-d-6 "
                    key={index}
                    style={{ paddingLeft: '0px', paddingRight: '20px', paddingBottom: '20px' }}
                  >
                    <a href={item.link.hyperLink} target="_blank">
                      <div className={screenWidth > 600 ? 'zoomIn' : ''}>
                        <img src={item.profilePic} alt="profile pic" />
                      </div>
                      <div className="name">{item.name}</div>
                      <div className="designation">{item.designation}</div>
                    </a>
                    <a
                      href={item.link.hyperLink}
                      className="link"
                      target="_blank"
                    >
                      {item.link.hyperText}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  getExpertiseHTML(expertise) {
    let screenWidth = window.screen.availWidth;
    return (
      <div>
        <img className="page-image" src={expertise.pageImage} alt="page" />
        <div className="state-page">
          <div className="tagline">{expertise.tagline}</div>
          {expertise.subText &&
            expertise.subText.map((item, index) => {
              return (
                <div className="subText" key={index}>
                  {item}
                </div>
              );
            })}
          {expertise.orderedList && (
            <div>
              <div className="subText">{expertise.orderedList.subject}</div>
              <div
                style={{
                  margin: 'auto'
                  // listStyle: 'disc',
                  // paddingLeft: screenWidth > 600 ? '3em' : '35px'
                }}
              >
                {expertise.orderedList.text &&
                  Object.keys(expertise.orderedList.text).map((key, index) => (
                    <div className="subText" key={index}>
                      <span style={{ fontWeight: 'bold' }}>{key}</span>
                      {expertise.orderedList.text[key]}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {expertise.aboutExpertise.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  borderBottom: '0.5px solid rgba(0, 0, 0, 0.14)',
                  padding: '40px 0px'
                }}
              >
                <img
                  src={item.expertiseImage}
                  className="expertiseImage"
                  alt="expertise"
                />
                <div className={'text'}>{item.text}</div>
                <div style={{ margin: '20px 0px' }}>
                  {item.subText.map(datum => {
                    return (
                      <div key={datum + index} className="subText">
                        {datum}
                      </div>
                    );
                  })}
                </div>
                {item.projectLinks.map((link, index) => {
                  return (
                    <div key={index} className="link">
                      <Link
                        className="inherit-color"
                        to={'/category/all/' + link.realName}
                      >
                        {link.projectedName}
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getDatum() {
    return (
      <div className="section">
        <div>Principals</div>
        <div className="descr">
          Rahul graduated from Sir J J School Of Art (Interior Design) & has a
          Masters from National Institute of design (Retail Experience
          Design).Worked with Gensler & Mustafa Eisa Architectural firm,
          responsible for International & Indian retail, Interior, brand
          experience projects.
        </div>
        <div className="descr">
          Rahul graduated from Sir J J School Of Art (Interior Design) & has a
          Masters from National Institute of design (Retail Experience
          Design).Worked with Gensler & Mustafa Eisa Architectural firm,
          responsible for International & Indian retail, Interior, brand
          experience projects.
        </div>
        <div className="descr">
          Rahul graduated from Sir J J School Of Art (Interior Design) & has a
          Masters from National Institute of design (Retail Experience
          Design).Worked with Gensler & Mustafa Eisa Architectural firm,
          responsible for International & Indian retail, Interior, brand
          experience projects.
        </div>
      </div>
    );
  }

  render() {
    let { selectedState } = this.state;
    let screenWidth = window.screen.availWidth;
    return (
      <div className="About-us-container">
        <div className="About-us-header">
          {
            <div className="Project-page-title">
              {PAGESTATES.map((type, index) => {
                let className =
                  selectedState.toUpperCase() === type.toUpperCase()
                    ? ' selected-title '
                    : ' hovered-title ';
                return (
                  <Link
                    key={index}
                    className={className}
                    to={'/about-studio/' + type}
                    onClick={() =>
                      this.setState({ selectedState: type }, () =>
                        window.scrollTo(0, 0)
                      )
                    }
                  >
                    {type}
                  </Link>
                );
              })}
            </div>
          }
        </div>
        <div className="About-us-page">
          {selectedState === 'firm' && this.getFirmHTML(firm)}
          {selectedState === 'team' && this.getTeamHTML(team)}
          {selectedState === 'expertise' && this.getExpertiseHTML(expertise)}
        </div>
        <ContactUs screenWidth={screenWidth} options={contactOptions} />
        {
          // <div className="row About-us">
          //   <div className="col-4">
          //     <img src={rahul} alt={"profile-pic"} />
          //   </div>
          //   <div className="col-8">
          //     {this.getDatum()}
          //     {this.getDatum()}
          //     {this.getDatum()}
          //   </div>
          // </div>
        }
      </div>
    );
  }
}

export default AboutUs;