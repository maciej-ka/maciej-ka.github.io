import React from 'react';
import * as d3 from 'd3';

class PieChart extends React.Component {

  // componentDidMount() {
  //   var data = [
  //     {time: 20, data: {name: 'name 1'}}
  //   ];
  //   this.drawChart('.roles-chart', data, null, .6);
  // }

  componentDidMount() {
    var data = [
      {title: 'architect', value: 1.2, subtitle: '1 year 2 months'},
      {title: 'analyst', value: 1.0, subtitle: '1 year 1 months'},
      {title: 'manager', value: 0.8, subtitle: '11 months'},
      {title: 'developer', value: 7.5, subtitle: '7 year 6 months'},
    ];
    this.drawChart(data);
  }

  // drawChart(selector, data, active, rotate) {
  //   arcs = chart.select('g').selectAll('.arc').data(pie(data));
  //   arcs.classed({
  //     'active': function(d) {
  //       return d.data.name === active;
  //     }
  //   });
  //   g = arcs.enter().append('g').attr('class', 'arc');
  //   g.append('path').attr('d', arc);
  //
  //   g.append('text').attr('transform', function(d) {
  //     return 'translate(' + (label_arc.centroid(d)) + ')';
  //   }).attr('dy', '.35em').attr('class', 'title').text(function(d) {
  //     if (d.data.name === 'project manager') {
  //       return 'manager';
  //     }
  //     if (d.data.name === 'software architect') {
  //       return 'architect';
  //     }
  //     return d.data.name;
  //   });
  //
  //   return g.append('text').attr('transform', function(d) {
  //     return 'translate(' + (label_arc.centroid(d)) + ')';
  //   }).attr('dy', '1.35em').attr('class', 'subtitle').text(function(d) {
  //     return d.data.human_time;
  //   });
  // }

  drawChart(data) {
    var height = 218;
    var width = 269;
    var radius = 100;
    var rotate = 0;

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

    var svg = d3.select('.some-chart')
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

    // var g = svg.selectAll('.arc')
    //   .data(pie(data))
    //   .enter()
    //   .append('g')
    //   .attr('class', 'option');

    // g.append('path')
    //   .attr('d', arc);

    // g.append('text')
    //   .attr('transform', function(d) { return `translate(${labelArc.centroid(d)})`; })
    //   .attr('dy', '0.35em')
    //   .attr('class', 'title')
    //   .text(function(d) { return d.data.title; });

    // g.append('text')
    //   .attr('transform', function(d) { return `translate(${labelArc.centroid(d)})`; })
    //   .attr('dy', '1.55em')
    //   .attr('class', 'subtitle')
    //   .text(function(d) { return d.data.subtitle; });

  }

  // constructor(props) {
  //   super();
  //   this.state = {
  //     projects: props.projects
  //   };
  // }

  render() {
    return (
      <div>
        <svg className='some-chart'></svg>
      </div>
    );
  }

}

PieChart.propTypes = {
  projects: React.PropTypes.array
};

export default PieChart;
