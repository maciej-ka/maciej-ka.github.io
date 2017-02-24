import React from 'react';
import VennDiagram from '../VennDiagram';

class SideChart extends React.Component {

  constructor(props) {
    super();
    this.state = {
      data: this.calculate(props)
    };
  }

  calculate(props) {
    let sides=[];
  }

  render() {
    return (
      <VennDiagram />
    );
  }

}

SideChart.propTypes = {
  projects: React.PropTypes.array
};

export default SideChart;
