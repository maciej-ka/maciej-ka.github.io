import React from 'react';
import PieChart from '../PieChart';
import {monthsToHuman} from '../helpers';

class RolesChart extends React.Component {

  constructor(props) {
    super();
    this.state = {
      data: this.calculate(props)
    };
  }

  calculate(props) {
    // calculate counters
    var counters = {};
    let calendar = props.calendar;
    for (let year in calendar) {
      for (let month in calendar[year]) {
        let value = calendar[year][month].role;
        counters[value] = (counters[value] || 0) + 1;
      }
    }

    // set order
    return ['architect', 'analyst', 'manager', 'developer'].map(role => ({
      title: role,
      subtitle: monthsToHuman(counters[role]),
      value: counters[role]
    }));
  }

  render() {
    return (
      <PieChart
        data = {this.state.data}
        rotate = {-0.76}
        name = 'rolesChart'
        setActive={this.props.setActive}
        active={this.props.active} />
    );
  }

}

RolesChart.propTypes = {
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
  calendar: React.PropTypes.object
};

export default RolesChart;
