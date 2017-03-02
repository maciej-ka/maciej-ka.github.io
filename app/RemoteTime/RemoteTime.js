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
      <span>
        {monthsToHuman(this.state.count)}
      </span>
    );
  }

}

RemoteTime.propTypes = {
  calendar: React.PropTypes.object
};

export default RemoteTime;
