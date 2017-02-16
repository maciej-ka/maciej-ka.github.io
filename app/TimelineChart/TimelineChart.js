import React from 'react';
import * as d3 from 'd3';

class TimelineChart extends React.Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    var data = this.props.data;
    var height = 100;
    var width = 600;
    var margin = 20;

    var scale = d3.scaleTime()
      .domain([new Date('2016-01-01'), new Date('2014-01-01')])
      .range([width, 0]);

    var svg = d3.select('.timeline-chart')
      .attr('viewBox', `0 0 ${width +  margin} ${height}`);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', d => scale(d.end) - scale(d.start) - 4)
      .attr('height', height - 20)
      .attr('x', d => width - scale(d.end) + 2)
      .attr('y', 0);

    var axis = d3.axisBottom()
      .scale(scale)
      .ticks(d3.timeYear);

    svg.append('g')
      .attr('transform', `translate(0, ${height - 20})`)
      .call(axis);
  }

  render() {
    return (
      <svg className='timeline-chart'></svg>
    );
  }

}

TimelineChart.propTypes = {
  data: React.PropTypes.array
};

export default TimelineChart;
