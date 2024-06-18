import React from 'react';
import * as d3 from 'd3';

class TimelineChart extends React.Component {

  constructor() {
    super();
    this.state = {
      drawn: false
    };
  }

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    var data = this.props.data.sort((a,b) => a.start - b.start);
    var height = 40;
    var width = 600;
    var margin = 20;

    var scale = d3.scaleTime()
      .domain([this.props.end, this.props.start])
      .range([0, width]);

    var svg = d3.select(`.timeline-${this.props.name}-${this.props.id}`)
      .attr('viewBox', `0 0 ${width +  margin} ${height}`);

    svg.selectAll('rect')
      .data(data)
      .on('mouseover', d => { this.props.setActive({project: d.project}); })
      .on('mouseleave', () => { this.props.setActive({}); })
      .classed('active', d => this.isActive(d.project))
      .enter()
      .append('rect')
      .attr('width', d => scale(d.start) - scale(d.end) - 4)
      .attr('height', height - 20)
      .attr('x', d => scale(d.end) + 2)
      .attr('y', 0);

    if (this.state.drawn) { return; }

    var axis = d3.axisBottom()
      .scale(scale)
      .ticks(d3.timeYear);

    svg.append('g')
      .attr('transform', `translate(0, ${height - 20})`)
      .call(axis);

    this.setState({drawn: true});

  }

  isActive(project) {
    let active = this.props.active;
    if (!active) {
      return false;
    }
    if (active.remote) {
      return project.remote;
    }
    if (active.project) {
      return project.id == active.project.id;
    }
    if (active.skill) {
      return project.skills.indexOf(active.skill) >= 0;
    }
    if (active.role) {
      return project.roleLabel == active.role;
    }
    if (active.side) {
      return project.side == active.side;
    }
    if (active.teamType) {
      return project.teamType == active.teamType;
    }
  }

  render() {
    return (
      <svg className={`timeline-${this.props.name}-${this.props.id}`}></svg>
    );
  }

}

TimelineChart.propTypes = {
  data: React.PropTypes.array,
  start: React.PropTypes.object,
  end: React.PropTypes.object,
  id: React.PropTypes.number,
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
  name: React.PropTypes.string
};

export default TimelineChart;
