import React from 'react';

class VennDiagram extends React.Component {

  render() {
    console.log(this.props.data);
    return (
      <svg className='venn-diagram'></svg>
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
