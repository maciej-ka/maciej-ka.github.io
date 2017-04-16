import React from 'react';
import * as d3 from 'd3';

class PieChart extends React.Component {

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
    var data = this.props.data;
    var height = 200;
    var width = 264;
    var radius = 100;
    var rotate = this.props.rotate;
    var g;

    if (!this.state.drawn) {
      d3.select(`svg.${this.props.name}`)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .append('g')
        .attr('class', 'graph')
        .attr('transform', `translate(${width/2} ${height/2})`);
    }

    var graph = d3.select(`.${this.props.name} .graph`);

    var arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius * 0.7);

    var labelArc = d3.arc()
      .outerRadius(radius * 0.60)
      .innerRadius(radius * 0.60);

    var pie = d3.pie()
      .padAngle(0.03)
      .startAngle(rotate * Math.PI)
      .endAngle((2 + rotate) * Math.PI)
      .sort(null)
      .value(function(d) { return d.value; });

    g = graph.selectAll('.arc')
      .data(pie(data))
      .on('mouseover', d => { this.props.setActive({role: d.data.title}); })
      .on('mouseleave', () => { this.props.setActive({}); })
      .classed('active', d => this.isActive(d.data.title))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('class', 'arc');

    g = graph.selectAll('.label')
      .data(pie(data))
      .classed('active', d => this.isActive(d.data.title))
      .enter()
      .append('g')
      .attr('class', 'label')
      .attr('transform', function(d) { return `translate(${labelArc.centroid(d)})`; });

    g.append('text')
      .on('mouseover', d => { this.props.setActive({role: d.data.title}); })
      .on('mouseleave', () => { this.props.setActive({}); })
      .attr('dy', '0.35em')
      .attr('class', 'title')
      .text(function(d) { return d.data.title; });

    g.append('text')
      .on('mouseover', d => { this.props.setActive({role: d.data.title}); })
      .on('mouseleave', () => { this.props.setActive({}); })
      .attr('dy', '1.55em')
      .attr('class', 'subtitle')
      .text(function(d) { return d.data.subtitle; });

    this.setState({drawn: true});

  }

  render() {
    return (
      <svg className={this.props.name}></svg>
    );
  }

  isActive(role) {
    let active = this.props.active;
    if (!active) {
      return false;
    }
    if (active.role) {
      return role == active.role;
    }
    if (active.project) {
      return role == active.project.roleLabel;
    }
  }

}


PieChart.propTypes = {
  data: React.PropTypes.array,
  rotate: React.PropTypes.number,
  name: React.PropTypes.string,
  setActive: React.PropTypes.func,
  active: React.PropTypes.object
};

PieChart.defaultProps = {
  rotate: 0
};

export default PieChart;
