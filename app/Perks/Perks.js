import React from 'react';
import {monthsToHuman} from '../helpers';

class Perks extends React.Component {

  constructor(props) {
    super();
    this.state = {};
    this.state.counters = this.calculate(props);
  }

  calculate(props) {
    let counters = {
      remote: 0,
      solo: 0,
      small: 0,
      large: 0
    };
    let calendar = props.calendar;
    for (let year in calendar) {
      for (let month in calendar[year]) {
        if (calendar[year][month].remote) {
          counters.remote += 1;
        }
        if (calendar[year][month].teamType == 'solo') {
          counters.solo += 1;
        }
        if (calendar[year][month].teamType == 'small') {
          counters.small += 1;
        }
        if (calendar[year][month].teamType == 'large') {
          counters.large += 1;
        }
      }
    }
    return counters;
  }

  render() {
    return (
      <div>
        <div
          className={`row ${this.isActive('remote') ? 'active' : ''}`}
          onMouseEnter={() => this.props.setActive({remote: true})}
          onMouseLeave={() => this.props.setActive({})} >
          <svg viewBox="0 0 1000 1000">
            <path d="M973.4,26.5c-37.3-37.3-101.5,0-101.5,0L669.2,229.4l-557.9-50.7l-50.7,50.7l405.7,202.8L263.6,635H60.7L10,685.8l202.8,101.5l101.5,202.8l50.7-50.7V736.6l202.8-202.8l202.9,405.4l50.7-50.7l-50.7-557.9L973.4,128C973.4,128,1010.7,63.8,973.4,26.5L973.4,26.5z"/>
          </svg>
          <div>
            <span className='title'>remote</span>
            <span className='subtitle'>
              {monthsToHuman(this.state.counters.remote)}
            </span>
          </div>
        </div>

        <div
          className={`row ${this.isActive('solo') ? 'active' : ''}`}
          onMouseEnter={() => this.props.setActive({teamType: 'solo'})}
          onMouseLeave={() => this.props.setActive({})} >
          <svg viewBox="0 0 25 25">
            <path d="m16.428 15.744c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07 0-4.107-2.731-6.26-5.905-6.26-3.176 0-5.892 2.152-5.892 6.26 0 2.682 1.244 5.406 2.891 7.088.642 1.684-.506 2.309-.746 2.396-2.238.724-8.325 4.332-8.229 9.586h24.05c.107-5.02-4.708-8.279-8.513-9.586"/>
          </svg>
          <div>
            <span className='title'>solo</span>
            <span className='subtitle'>
              {monthsToHuman(this.state.counters.solo)}
            </span>
          </div>
        </div>

        <div
          className={`row ${this.isActive('small') ? 'active' : ''}`}
          onMouseEnter={() => this.props.setActive({teamType: 'small'})}
          onMouseLeave={() => this.props.setActive({})} >
          <svg viewBox="0 0 45 45">
            <defs>
              <path id="user-small" d="m16.428 15.744c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07 0-4.107-2.731-6.26-5.905-6.26-3.176 0-5.892 2.152-5.892 6.26 0 2.682 1.244 5.406 2.891 7.088.642 1.684-.506 2.309-.746 2.396-2.238.724-8.325 4.332-8.229 9.586h24.05c.107-5.02-4.708-8.279-8.513-9.586"/>
              <mask id="right-small">
                <rect width="100%" height="100%" style={{fill:'white'}}/>
                <circle cx="21.5" cy="24" r="8" style={{fill:'black'}}/>
              </mask>
              <mask id="left-small">
                <rect width="100%" height="100%" style={{fill:'white'}}/>
                <circle cx="4" cy="24" r="8" style={{fill:'black'}}/>
              </mask>
            </defs>
            <use href="#user-small" x="0" y="0" mask='url(#right-small)'/>
            <use href="#user-small" x="18" y="0" mask='url(#left-small)'/>
            <use href="#user-small" x="9" y="18"/>
          </svg>
          <div>
            <span className='title'>small team</span>
            <span className='subtitle'>
              {monthsToHuman(this.state.counters.small)}
            </span>
          </div>
        </div>

        <div
          className={`row ${this.isActive('large') ? 'active' : ''}`}
          onMouseEnter={() => this.props.setActive({teamType: 'large'})}
          onMouseLeave={() => this.props.setActive({})} >
          <svg viewBox="0 0 62 62">
            <defs>
              <path id="user" d="m16.428 15.744c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07 0-4.107-2.731-6.26-5.905-6.26-3.176 0-5.892 2.152-5.892 6.26 0 2.682 1.244 5.406 2.891 7.088.642 1.684-.506 2.309-.746 2.396-2.238.724-8.325 4.332-8.229 9.586h24.05c.107-5.02-4.708-8.279-8.513-9.586"/>
              <mask id="right">
                <rect width="100%" height="100%" style={{fill:'white'}}/>
                <circle cx="21.5" cy="24" r="8" style={{fill:'black'}}/>
              </mask>
              <mask id="left">
                <rect width="100%" height="100%" style={{fill:'white'}}/>
                <circle cx="4" cy="24" r="8" style={{fill:'black'}}/>
              </mask>
              <mask id="both">
                <rect width="100%" height="100%" style={{fill:'white'}}/>
                <circle cx="4" cy="24" r="8" style={{fill:'black'}}/>
                <circle cx="21.5" cy="24" r="8" style={{fill:'black'}}/>
              </mask>
            </defs>
            <use href="#user" x="0" y="0" mask="url(#right)"/>
            <use href="#user" x="18" y="0" mask="url(#both)"/>
            <use href="#user" x="36" y="0" mask="url(#left)"/>
            <use href="#user" x="9" y="18" mask="url(#right)"/>
            <use href="#user" x="27" y="18" mask="url(#left)"/>
            <use href="#user" x="18" y="36"/>
          </svg>
          <div>
            <span className='title'>large team</span>
            <span className='subtitle'>
              {monthsToHuman(this.state.counters.large)}
            </span>
          </div>
        </div>
      </div>
    );
  }

  isActive(perk) {
    let active = this.props.active;
    if (!active) {
      return false;
    }
    if (active.project) {
      if(perk == 'remote') {
        return active.project.remote;
      }
      if(perk == 'solo') {
        return active.project.teamType == 'solo';
      }
      if(perk == 'small') {
        return active.project.teamType == 'small';
      }
      if(perk == 'large') {
        return active.project.teamType == 'large';
      }
    }
    if(perk == 'remote') {
      return active.remote;
    }
    if(perk == 'solo') {
      return active.teamType == 'solo';
    }
    if(perk == 'small') {
      return active.teamType == 'small';
    }
    if(perk == 'large') {
      return active.teamType == 'large';
    }
  }

}

Perks.propTypes = {
  calendar: React.PropTypes.object,
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
};

export default Perks;
