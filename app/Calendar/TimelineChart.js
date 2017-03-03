import React from 'react';
import * as d3 from 'd3';

class TimelineChart extends React.Component {

  constructor() {
    super();
    this.state = {
      axis: false
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
    var height = 60;
    var width = 600;
    var margin = 20;

    var scale = d3.scaleTime()
      .domain([this.props.end, this.props.start])
      .range([0, width]);

    var svg = d3.select(`.timeline-${this.props.id}`)
      .attr('viewBox', `0 0 ${width +  margin} ${height}`);

    svg.selectAll('rect')
      .data(data)
      .on('mouseover', d => { this.props.setActive({project: d.project.id}); })
      .on('mouseleave', () => { this.props.setActive({}); })
      .classed('active', d => this.isActive(d.project))
      .enter()
      .append('rect')
      .attr('width', d => scale(d.start) - scale(d.end) - 4)
      .attr('height', height - 20)
      .attr('x', d => scale(d.end) + 2)
      .attr('y', 0);

    if (this.state.axis) { return; }

    var axis = d3.axisBottom()
      .scale(scale)
      .ticks(d3.timeYear);

    svg.append('g')
      .attr('transform', `translate(0, ${height - 20})`)
      .call(axis);

    this.setState({axis: true});

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
      return project.id == active.project;
    }
    if (active.skill) {
      return project.skills.indexOf(active.skill) >= 0;
    }
  }

  render() {
    return (
      <svg className={`timeline-${this.props.id}`}></svg>
    );
  }

}

TimelineChart.propTypes = {
  data: React.PropTypes.array,
  start: React.PropTypes.object,
  end: React.PropTypes.object,
  id: React.PropTypes.number,
  setActive: React.PropTypes.func,
  active: React.PropTypes.object
};

export default TimelineChart;
