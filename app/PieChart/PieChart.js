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
      {age: '<5', population: 2704659},
      {age: '5-13', population: 4499890},
      {age: '14-17', population: 2159981},
      {age: '18-24', population: 3853788}
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
  //   return g.append('text').attr('transform', function(d) {
  //     return 'translate(' + (label_arc.centroid(d)) + ')';
  //   }).attr('dy', '1.35em').attr('class', 'subtitle').text(function(d) {
  //     return d.data.human_time;
  //   });
  // }


  drawChart(data) {
    var radius = 600;
    var rotate = 0;

    var arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius * .2);

    var labelArc = d3.arc()
      .outerRadius(radius * .6)
      .innerRadius(radius * .6);

    var pie = d3.pie()
      .padAngle(.03)
      .startAngle(rotate * Math.PI)
      .endAngle((2 + rotate) * Math.PI)
      // .sort(null)
      .value(function(d) { return d.population; });

    var svg = d3.select('.some-chart')
      .attr('viewBox', `0 0 ${radius * 2} ${radius * 2}`)
      .append('g')
      .attr('transform', 'translate(' + radius + ',' + radius + ')');

    var g = svg.selectAll('.arc')
      .data(pie(data))
      .enter().append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc);

    g.append('text')
      .attr('transform', function(d) { return 'translate(' + labelArc.centroid(d) + ')'; })
      .attr('dy', '.35em')
      .text(function(d) { return d.data.age; });
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
