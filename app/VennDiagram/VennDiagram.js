import React from 'react';

class VennDiagram extends React.Component {

  render() {
    const maxRadius = 40;
    const data = this.props.data;

    return (
      <svg className='vennDiagram' viewBox='0 0 200 174'>
        <circle cx='40' cy='40' r={data['backend'].radius * maxRadius} />
        <circle cx='40' cy='59' r={data['frontend'].radius * maxRadius} />
        <circle cx='40' cy='107' r={data['mobile'].radius * maxRadius} />
        <circle cx='40' cy='141' r={data['other'].radius * maxRadius} />
        <text x='85' y='25'>backend</text>
      </svg>
    );
  }

}

VennDiagram.propTypes = {
  data: React.PropTypes.object
};

export default VennDiagram;
