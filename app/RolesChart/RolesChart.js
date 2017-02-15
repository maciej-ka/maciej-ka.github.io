import React from 'react';
import PieChart from '../PieChart';

class RolesChart extends React.Component {

  static roles() {
    return ['analyst', 'manager', 'developer', 'architect'];
  }

  constructor(props) {
    super();
    this.state = {
      data: this.calculate(props.projects)
    };
  }

  getRole(project) {
    var role = project.role.toLowerCase();
    var roles = RolesChart.roles();
    for(let i=0; i<roles.length; i++) {
      if (role.indexOf(roles[i]) >= 0) {
        return i;
      }
    }
  }

  calculate(projects) {
    var calendar = {};

    projects.forEach(project => {
      let role = this.getRole(project);
      let date = project.start.clone();
      while (date < project.end) {
        let year = date.year();
        let month = date.month();
        calendar[year] = calendar[year] || [];
        calendar[year][month] = Math.max(role, calendar[year][month] || -1);
        date = date.add(1, 'month');
      }
    });

    var counters = {};
    for (let year in calendar) {
      for (let month in calendar[year]) {
        let value = calendar[year][month];
        counters[value] = (counters[value] || 0) + 1;
      }
    }

    return ['architect', 'analyst', 'manager', 'developer'].map(role => {
      let i = RolesChart.roles().indexOf(role);
      return {
        title: role,
        subtitle: counters[i],
        value: counters[i]
      };
    });
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
