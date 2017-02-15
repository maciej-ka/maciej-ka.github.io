import React from 'react';
import PieChart from '../PieChart';

class RolesChart extends React.Component {

  constructor(props) {
    super();
    this.state = {
      data: this.calculate(props.projects)
    };
  }

  calculate(projects) {
    var priority = {architect: 4, analyst: 3, manager: 2, developer: 1};
    var calendar = {};
    var year, month, date;

    projects.forEach((project) => {
      date = project.start.clone();
      while (date < project.end) {
        year = date.year();
        month = date.month();
        if (!calendar[year]) {
          calendar[year] = [];
        }
        calendar[year][month] = Math.max(1,2);
        date = date.add(1, 'month');
      }
    });

    return [
      {title: 'architect', value: 1.2, subtitle: '1 year 2 months'},
      {title: 'analyst', value: 1.0, subtitle: '1 year 1 months'},
      {title: 'manager', value: 0.8, subtitle: '11 months'},
      {title: 'developer', value: 7.5, subtitle: '7 year 6 months'}
    ];
  }

  render() {
    return (
      <PieChart data={this.state.data} />
    );
  }

}

RolesChart.propTypes = {
  projects: React.PropTypes.array
};

export default RolesChart;
