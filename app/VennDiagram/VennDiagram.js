import React from 'react';

class VennDiagram extends React.Component {

  render() {
    return (
      <svg className='vennDiagram' viewBox='0 0 200 200'>
        <circle cx='40' cy='50' r='40' />
        <circle cx='40' cy='87' r='34' />
        <circle cx='40' cy='155' r='18' />
        <text x='85' y='25'>test</text>
      </svg>
    );
  }

}

VennDiagram.propTypes = {
  data: React.PropTypes.array
};

VennDiagram.defaultProps = {
  data: []
};

export default VennDiagram;
