import React from 'react';
import VennDiagram from '../VennDiagram';
import {monthsToHuman} from '../helpers';

class SideChart extends React.Component {

  constructor(props) {
    super();
    this.state = {
      data: this.calculate(props)
    };
  }

  calculate(props) {
    // sum month durations
    let durations={};
    props.projects.forEach(project => {
      let side = project.side || 'other';
      durations[side] = durations[side] || 0;
      durations[side] += project.duration;
    });
    durations['frontend'] += durations['fullstack'];
    durations['backend'] += durations['fullstack'];

    // get max
    let maxDuration=0;
    for(let key in durations) {
      maxDuration = Math.max(maxDuration, durations[key]);
    }
    let maxRadius=Math.sqrt(maxDuration/3.14);

    // set diagram details
    let data={};
    for(let key in durations) {
      let side = {
        subtitle: monthsToHuman(durations[key]),
        radius: Math.sqrt(durations[key]/3.14) / maxRadius
      };
      data[key] = side;
    }

    return data;
  }

  render() {
    return (
      <VennDiagram data={this.state.data} />
    );
  }

}

SideChart.propTypes = {
  projects: React.PropTypes.array
};

export default SideChart;
