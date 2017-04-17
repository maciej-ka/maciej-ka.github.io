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
    let calendar = props.calendar;
    for (let year in calendar) {
      for (let month in calendar[year]) {
        let side = calendar[year][month].side;
        data[side] = data[side] || {value: 0, valueSeparate: 0};
        data[side].value += 1;
        data[side].valueSeparate += 1;
      }
    }
    data['frontend'].value += data['fullstack'].value;
    data['backend'].value += data['fullstack'].value;

    // get max value
    let max=0;
    for(let key in data) {
      max = Math.max(max, data[key].value);
    }

    // normalize and add title
    for(let key in data) {
      data[key].subtitle = monthsToHuman(data[key].valueSeparate);
      data[key].radius = Math.sqrt(data[key].value * Math.PI) / Math.sqrt(max * Math.PI);
      data[key].value = data[key].radius * data[key].radius * Math.PI;
    }

    return data;
  }

  calculateDistance() {
    let min = 0;
    let max = Math.PI;
    let res;

    // numerically solve intesection equation
    for(let i = 0; i < 10; i++) {
      let arc = (max + min) / 2;
      res = this.calculateMiss(arc);
      if (res.miss > 0) {
        max = arc;
      } else {
        min = arc;
      }
    }

    // return distance for last angle
    return res.d;
  }

  calculateMiss(alpha) {
    const r1 = this.state.data['backend'].radius;
    const r2 = this.state.data['frontend'].radius;
    const area = this.state.data['fullstack'].value;
    const beta = Math.asin(r2 * Math.sin(alpha) / r1);

    // distance between circles
    let d = r2 * Math.cos(alpha) + r1 * Math.cos(beta);
    // intersection equation
    let miss =
      r2 * r2 * (alpha - Math.sin(alpha) * Math.cos(alpha))
      + r1 * r1 * (beta - Math.sin(beta) * Math.cos(beta))
      - area;
    return {d, miss};
  }

  render() {
    const height = 153;
    const width = 200;
    const scale = 34;
    const data = this.state.data;

    // radiuses
    let r = {};
    for(let key in this.state.data) {
      r[key] = data[key].radius * scale;
    }

    // y positions
    let y = {
      backend: r.backend,
      frontend: r.backend + this.state.distance * scale,
      other: height - r.other
    };
    // place free spaces evengly
    const vennHeight = y.frontend + r.frontend;
    let gap = height - vennHeight - 2 * (r.mobile + r.other);
    y.mobile = y.frontend + r.frontend + gap / 2 + r.mobile;

    return (
      <svg className='vennDiagram' viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <mask id='no-backend' >
            <rect
              width='100%'
              height='100%'
              style={{fill: 'white'}} />
            <circle
              cx={scale}
              cy={r.backend}
              r={r.backend}
              className='stroke'
              style={{fill: 'black'}} />
          </mask>

          <mask id='no-frontend'>
            <rect
              width='100%'
              height='100%'
              style={{fill: 'white'}} />
            <circle
              cx={scale}
              cy={y.frontend}
              r={r.frontend}
              className='stroke'
              style={{fill: 'black'}} />
          </mask>

          <clipPath id='frontend'>
            <circle
              cx={scale}
              cy={y.frontend}
              r={r.frontend}
              style={{fill: 'white'}} />
          </clipPath>
        </defs>

        <circle
          mask='url(#no-frontend)'
          onMouseEnter={() => this.props.setActive({side: 'backend'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('backend') && 'active'}
          cx={scale}
          cy={r.backend}
          r={r.backend} />

        <circle
          mask='url(#no-backend)'
          onMouseEnter={() => this.props.setActive({side: 'frontend'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('frontend') && 'active'}
          cx={scale}
          cy={y.frontend}
          r={r.frontend} />

        <circle
          clipPath='url(#frontend)'
          onMouseEnter={() => this.props.setActive({side: 'fullstack'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('fullstack') && 'active'}
          cx={scale}
          cy={r.backend}
          r={r.backend} />

        <circle
          onMouseEnter={() => this.props.setActive({side: 'mobile'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('mobile') && 'active'}
          cx={scale}
          cy={y.mobile}
          r={r.mobile} />

        <circle
          onMouseEnter={() => this.props.setActive({side: 'other'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('other') && 'active'}
          cx={scale}
          cy={y.other}
          r={r.other} />

        <g transform='translate(85, 10)'
          onMouseEnter={() => this.props.setActive({side: 'backend'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('backend') && 'active'}>
          <text className='title'>backend</text>
          <text className='subtitle' dy='1em'>{data['backend'].subtitle}</text>
        </g>

        <g transform={`translate(85, ${vennHeight / 2})`}
          onMouseEnter={() => this.props.setActive({side: 'fullstack'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('fullstack') && 'active'}>
          <text className='title'>fullstack</text>
          <text className='subtitle' dy='1em'>{data['fullstack'].subtitle}</text>
        </g>

        <g transform={`translate(85, ${vennHeight - 11})`}
          onMouseEnter={() => this.props.setActive({side: 'frontend'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('frontend') && 'active'}>
          <text className='title'>frontend</text>
          <text className='subtitle' dy='1em'>{data['frontend'].subtitle}</text>
        </g>

        <g transform={`translate(85, ${y.mobile})`}
          onMouseEnter={() => this.props.setActive({side: 'mobile'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('mobile') && 'active'}>
          <text className='title'>mobile</text>
          <text className='subtitle' dy='1em'>{data['mobile'].subtitle}</text>
        </g>

        <g transform={`translate(85, ${y.other})`}
          onMouseEnter={() => this.props.setActive({side: 'other'})}
          onMouseLeave={() => this.props.setActive({})}
          className={this.isActive('other') && 'active'}>
          <text className='title'>other</text>
          <text className='subtitle' dy='1em'>{data['other'].subtitle}</text>
        </g>
      </svg>
    );
  }

  isActive(side) {
    let active = this.props.active;
    if (!active) {
      return false;
    }
    if (active.project) {
      return side == active.project.side;
    }
    if (active.side) {
      return side == active.side;
    }
  }

}

SideChart.propTypes = {
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
  calendar: React.PropTypes.object
};

export default SideChart;
