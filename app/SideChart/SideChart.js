import React from 'react';
import {monthsToHuman} from '../helpers';

class SideChart extends React.Component {

  constructor(props) {
    super();
    this.state = {};
    this.state.data = this.calculateData(props);
    this.state.distance = this.calculateDistance();
  }

  calculateData(props) {
    // sum month durations
    let data={};
    props.projects.forEach(project => {
      let side = project.side || 'other';
      data[side] = data[side] || {value: 0};
      data[side].value += project.duration;
    });
    data['frontend'].value += data['fullstack'].value;
    data['backend'].value += data['fullstack'].value;

    // add title and radius
    for(let key in data) {
      data[key].subtitle = monthsToHuman(data[key].value);
      data[key].radius = Math.sqrt(data[key].value / Math.PI);
    }

    // // get max duration
    // let max=0;
    // for(let key in durations) {
    //   max = Math.max(max, durations[key]);
    // }

    // // calculate normalized values (between zero and one)
    // let data={};
    // for(let key in durations) {
    //   data[key] = {
    //     value: durations[key] / max,
    //     subtitle: monthsToHuman(durations[key]),
    //     radius: Math.sqrt(durations[key] / Math.PI) / Math.sqrt(max / Math.PI)
    //   };
    // }

    // let data={};
    // for(let key in durations) {
    //   data[key] = {
    //     value: durations[key],
    //     subtitle: monthsToHuman(durations[key]),
    //     radius: Math.sqrt(durations[key] / Math.PI)
    //   };
    // }

    return data;
  }

  calculateDistance() {
    const r2 = this.state.data['frontend'].radius;
    const inside = this.calculateMiss(r2).miss < 0;

    // set range of intersection height
    let h, max, min, res;
    if (inside) {
      min = r2;
      max = 0;
    } else {
      min = 0;
      max = r2;
    }

    // interpolate intersection height
    for(let i = 0; i < 10; i++) {
      h = (max + min) / 2;
      res = this.calculateMiss(h, inside);
      if (res.miss < 0) {
        min = h;
      } else {
        max = h;
      }
      console.log(res.d, res.miss);
    }
    return res.d;
  }

  calculateMiss(h, inside = false) {
    const r1 = this.state.data['backend'].radius;
    const r2 = this.state.data['frontend'].radius;
    const area = this.state.data['fullstack'].value;

    if (!inside) {
      let d = Math.sqrt(r1 * r1 - h * h) + Math.sqrt(r2 * r2 - h * h);
      let miss =
        + r1 * r1 * Math.asin(h / r1)
        + r2 * r2 * Math.asin(h / r2)
        - h * d
        - area;
      return {d, miss};
    }

    let d = Math.sqrt(r1 * r1 - h * h) - Math.sqrt(r2 * r2 - h * h);
    let miss =
      + r1 * r1 * Math.asin(h / r1)
      - h * Math.sqrt(r1 * r1 - h * h)
      + Math.PI * r2 * r2
      - (
        + r2 * r2 * Math.asin(h / r2)
        - h * Math.sqrt(r2 * r2 - h * h)
        )
      - area;
    return {d, miss};
  }

  render() {
    const scale = 1;
    const data = this.state.data;
    // position of second circle
    // const cy = (data['backend'].radius + this.state.distance) * scale;

    return (
      <svg className='vennDiagram' viewBox='0 0 20 50'>
        <circle
          cx='10'
          cy={data['backend'].radius * scale}
          r={data['backend'].radius * scale} />

        <circle
          cx='10'
          cy={(data['backend'].radius + this.state.distance) * scale}
          r={data['frontend'].radius * scale} />

        <circle cx='25' cy='107' r={data['mobile'].radius * scale} />
        <circle cx='25' cy='141' r={data['other'].radius * scale} />
        <text x='85' y='25'>backend</text>
      </svg>
    );
  }

}

SideChart.propTypes = {
  projects: React.PropTypes.array
};

export default SideChart;
