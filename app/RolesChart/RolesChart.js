import React from 'react';
import PieChart from '../PieChart';
import {monthsToHuman} from '../helpers';

class RolesChart extends React.Component {

  constructor(props) {
    super();
    this.state = {
      data: this.calculate(props.projects)
    };
  }

  calculate(projects) {
    // solve overlaping by priorities
    var calendar = {};
    var roles = {};
    projects.forEach(project => {
      roles[project.roleLabel] = project.rolePriority;
      let date = project.start.clone();
      while (date < project.end) {
        let year = date.year();
        let month = date.month();
        calendar[year] = calendar[year] || [];
        calendar[year][month] = Math.max(project.rolePriority, calendar[year][month] || -1);
        date = date.add(1, 'month');
      }
    });

    // calculate counters
    var counters = {};
    for (let year in calendar) {
      for (let month in calendar[year]) {
        let value = calendar[year][month];
        counters[value] = (counters[value] || 0) + 1;
      }
    }

    // format chart data
    return ['architect', 'analyst', 'manager', 'developer'].map(role => ({
      title: role,
      subtitle: monthsToHuman(counters[roles[role]]),
      value: counters[roles[role]]
    }));
  }

  render() {
    return (
      <PieChart
        data={this.state.data}
        rotate={0}
      />
    );
  }

}

RolesChart.propTypes = {
  projects: React.PropTypes.array
};

export default RolesChart;
