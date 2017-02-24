import React from 'react';
import * as d3 from 'd3';

class PieChart extends React.Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    var data = this.props.data;
    var height = 218;
    var width = 269;
    var radius = 100;
    var rotate = this.props.rotate;

    var arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius * 0.2);

    var labelArc = d3.arc()
      .outerRadius(radius * 0.6)
      .innerRadius(radius * 0.6);

    var pie = d3.pie()
      .padAngle(0.03)
      .startAngle(rotate * Math.PI)
      .endAngle((2 + rotate) * Math.PI)
      .sort(null)
      .value(function(d) { return d.value; });

    var svg = d3.select(`.${this.props.name}`)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${width/2} ${height/2})`);

    var g = svg.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('class', 'arc');

    g = svg.selectAll('.label')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('transform', function(d) { return `translate(${labelArc.centroid(d)})`; });

    g.append('text')
      .attr('dy', '0.35em')
      .attr('class', 'title')
      .text(function(d) { return d.data.title; });

    g.append('text')
      .attr('dy', '1.55em')
      .attr('class', 'subtitle')
      .text(function(d) { return d.data.subtitle; });

  }

  render() {
    return (
      <svg className={this.props.name}></svg>
    );
  }

}

PieChart.propTypes = {
  data: React.PropTypes.array,
  rotate: React.PropTypes.number,
  name: React.PropTypes.string
};

PieChart.defaultProps = {
  rotate: 0
};

export default PieChart;
