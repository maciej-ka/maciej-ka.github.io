import React from 'react';
import {monthsToHuman} from '../helpers';

class RemoteTime extends React.Component {

  constructor(props) {
    super();
    this.state = {};
    this.state.count = this.calculate(props);
  }

  calculate(props) {
    let count = 0;
    let calendar = props.calendar;
    for (let year in calendar) {
      for (let month in calendar[year]) {
        if (calendar[year][month].remote) {
          count += 1;
        }
      }
    }
    return count;
  }

  render() {
    return (
      <div
        className={`remote ${this.isActive() ? 'active' : ''}`}
        onMouseEnter={() => this.props.setActive({remote: true})}
        onMouseLeave={() => this.props.setActive({})} >
        <span className='title'>Remote</span>
        <span className='subtitle'>
          {monthsToHuman(this.state.count)}
        </span>
      </div>
    );
  }

  isActive() {
    let active = this.props.active;
    if (!active) {
      return false;
    }
    if (active.project) {
      return active.project.remote;
    }
    return active.remote;
  }

}

RemoteTime.propTypes = {
  calendar: React.PropTypes.object,
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
};

export default RemoteTime;
