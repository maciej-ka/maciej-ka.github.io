import React from 'react';
// import * as d3 from 'd3';

class PieChart extends React.Component {

  // componentDidMount() {
  //   console.log(d3);
  //   var data = [
  //     {time: 20, data: {name: 'name 1'}}
  //   ];
  //   this.drawChart('.roles-chart', data, null, .6);
  // }

  // drawChart(selector, data, active, rotate) {
  //   var arc, arcs, chart, g, label_arc, pie, radius;
  //   radius = 600 * .35;
  //   chart = d3.select(selector);
  //   pie = d3.pie().value(function(d) {
  //     return d.time;
  //   }).padAngle(.03).startAngle(rotate * Math.PI).endAngle((2 + rotate) * Math.PI);
  //   arc = d3.arc().outerRadius(radius * 1).innerRadius(radius * .2);
  //   label_arc = d3.arc().outerRadius(radius * .6).innerRadius(radius * .6);
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

  // constructor(props) {
  //   super();
  //   this.state = {
  //     projects: props.projects
  //   };
  // }

  render() {
    return (
      <div>
        <svg className='roles_chart' viewBox='0 0 600 600'>
          <g className='pie-container' />
        </svg>
      </div>
    );
  }

}

PieChart.propTypes = {
  projects: React.PropTypes.array
};

export default PieChart;
