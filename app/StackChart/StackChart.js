import React from 'react';
import VennDiagram from '../VennDiagram';

class StackChart extends React.Component {

  render() {
    return (
      <VennDiagram />
    );
  }

}

StackChart.propTypes = {
  projects: React.PropTypes.array
};

export default StackChart;
