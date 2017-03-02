import React from 'react';
import * as d3 from 'd3';

class TimelineChart extends React.Component {

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    var data = this.props.data;
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
      .enter()
      .append('rect')
      .attr('width', d => scale(d.start) - scale(d.end) - 4)
      .attr('height', height - 20)
      .attr('x', d => scale(d.end) + 2)
      .attr('y', 0)
      .classed('active', d => this.isActive(d.project));

    var axis = d3.axisBottom()
      .scale(scale)
      .ticks(d3.timeYear);

    svg.append('g')
      .attr('transform', `translate(0, ${height - 20})`)
      .call(axis);
  }

  isActive(project) {
    let active = this.props.active;
    console.log(active);
    if(!active) {
      return false;
    }
    if(active.remote) {
      console.log('true');
      return project.remote
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
