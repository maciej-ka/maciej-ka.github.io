import React from 'react';

class AllSkills extends React.Component {
  render() {
    return (
      <div>
        {this.props.skills.map(s =>
          <span key={s.name}>{s.name} </span>
        )}
      </div>
    );
  }
}

AllSkills.propTypes = {
  skills: React.PropTypes.array
};

export default AllSkills;
